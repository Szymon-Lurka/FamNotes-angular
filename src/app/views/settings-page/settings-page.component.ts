import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  hasGroup: boolean;
  nickname: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    const userData = this.sharedService.fetchUserData();
    this.hasGroup = userData.groupID !== null;
    this.nickname = userData.login;
  }
}
