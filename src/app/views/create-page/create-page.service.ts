import { Injectable } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {User} from "../../auth/user.model";
import {SharedService} from "../../shared/shared.service";
import { map} from "rxjs/operators";
import {CreatePageResponseDto} from "./dto/create-page-response.dto";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreatePageService {
errorMessage = new Subject<string>();

  constructor(private http: HttpClient,
              private sharedService: SharedService,
              private router: Router) { }

  onCreateGroup(form: NgForm) {
    const user: User = this.sharedService.fetchUserData();

    this.http.post("http://localhost:9000/group/create", {
      name: form.value.name,
      description: form.value.description,
      userID: user.id,
      groupTag: form.value.tag,
    }).pipe(
      map((resData: CreatePageResponseDto) => {
        if (!resData.message) {
          user.groupDescription = resData.description;
          user.groupTag = resData.groupTag;
          user.groupTitle = resData.name;
          user.groupID = resData.id;
          return user;
        } else return resData.message;
      }))
      .subscribe((response: User | string) => {
      if (typeof response === "string") {
       this.errorMessage.next(response);
      } else {
        localStorage.clear();
        localStorage.setItem('userData', JSON.stringify(response));
        this.router.navigate(['/group']);
      }
    });
  }
}
