import { Injectable } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SharedService} from "../../shared/shared.service";
import {JoinGroupResDto} from "./dto/join-group-res.dto";
import {User} from "../../auth/user.model";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JoinGroupService {
  errorMessage = new Subject<string>();

  constructor(private http: HttpClient,
              private sharedService: SharedService,
              private router: Router) { }

  onJoin(form: NgForm) {
    const user: User = this.sharedService.fetchUserData();
    const userID = user.id;
    this.http.post("http://localhost:9000/group/join", {
      userID,
      groupTag: form.value.tag,
    }).pipe(
      map((resData: JoinGroupResDto) => {
        if (resData.isSuccess) {
          user.groupDescription = resData.group.description;
          user.groupTag = resData.group.tag;
          user.groupTitle = resData.group.name;
          user.groupID = resData.group.id;
          return user;
        } else return resData.message;
      })
    ).subscribe((response: User | string) => {
      if (typeof response === "string") {
        this.errorMessage.next(response);
      } else {
        localStorage.clear();
        localStorage.setItem('userData', JSON.stringify(response));
        this.router.navigate(['/group']);
      }
    })
  }
}
