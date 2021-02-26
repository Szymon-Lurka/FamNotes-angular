import {Injectable} from '@angular/core';
import {User} from "../auth/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router: Router) { }

  fetchUserData(): User {
    return JSON.parse(localStorage.getItem('userData'));
  }
}
