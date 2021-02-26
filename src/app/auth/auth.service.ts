import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user.model";
import {SignUpDto} from "./dto/sign-up.dto";
import {Router} from "@angular/router";
import {SignInDto} from "./dto/sign-in.dto";
import {Observable, of, Subject} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errorMessage = new Subject<string>();

  constructor(private http: HttpClient,
              private router: Router) { }

  onSignup(login: string, password: string): void {
    this.http.post("http://localhost:9000/user/register", {
      login,
      pwd: password,
    })
      .pipe(
        map((resData: SignUpDto) => {
          const login = resData.login;
          const id = resData.id;
          return new User(login, id);
        }),
        catchError(errorRes => {
          return this.handleError(errorRes.error.text);
        })
      ).subscribe((user: User | string) => {
        if (typeof user === "string") {
          this.errorMessage.next(user)
        } else {
          localStorage.setItem('userData', JSON.stringify(user));
          this.router.navigate(['/']);
        }
    })
  }

  onSignin(login: string, password: string): void {
    this.http.post("http://localhost:9000/auth/login", {
      login,
      pwd: password,
    }).pipe(
      map((resData: SignInDto) => {
        if (resData.error) {
          return resData.error;
        }
        let groupID,
          groupName,
          groupDesc,
          groupTag: string = null;
        if (resData.user.group) {
          groupID = resData.user.group.id;
          groupName = resData.user.group.name;
          groupDesc = resData.user.group.description;
          groupTag = resData.user.group.tag;
        }
        return new User(
          resData.user.login,
          resData.user.id,
          groupID,
          groupName,
          groupDesc,
          groupTag
        );
      })
    ).subscribe((user: User | string) => {
      if (typeof user === "string") {
        this.errorMessage.next(user);
      } else {
        localStorage.setItem('userData', JSON.stringify(user));
        this.router.navigate(['/']);
      }
    })
  }

  onLogout(): void {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }

  handleError(errorMsg): Observable<string> {
    if (errorMsg = "Już istnieje taki użytkownik!") {
      return of(errorMsg)
    }
    else {
      return of("Nie udało się założyć konta")
    }
  }
}
