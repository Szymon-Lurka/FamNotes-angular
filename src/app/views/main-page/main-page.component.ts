import {Component, OnInit} from '@angular/core';
import {User} from "../../auth/user.model";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  hasGroup: boolean;
  username: string = '';
  user: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    const userData = this.sharedService.fetchUserData();
    this.user = userData.login;
    this.username = userData.login;
    this.hasGroup = userData.groupID !== null;
  }
}
