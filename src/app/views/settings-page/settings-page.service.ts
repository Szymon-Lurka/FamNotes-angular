import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../../auth/user.model";

@Injectable({
  providedIn: 'root'
})
export class SettingsPageService {

  constructor(private http:HttpClient,
              private router: Router) { }

  onExit(userID: string) {
    this.http.post("http://localhost:9000/group/exit", {
      userID
    }).subscribe(() =>
    {
      const user: User = JSON.parse(localStorage.getItem('userData'));
      user.groupTitle = null;
      user.groupTag = null;
      user.groupID = null;
      user.groupDescription = null;
      localStorage.clear();
      localStorage.setItem('userData', JSON.stringify(user));
      this.router.navigate(['/'])
    })
  }
}
