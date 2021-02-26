import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../../shared/shared.service";
import {SettingsPageService} from "../settings-page.service";

@Component({
  selector: 'app-settings-page-has-group',
  templateUrl: './settings-page-has-group.component.html',
  styleUrls: ['./settings-page-has-group.component.scss']
})
export class SettingsPageHasGroupComponent implements OnInit {

  constructor(private sharedService: SharedService,
              private settingsPageService: SettingsPageService) { }

  ngOnInit(): void {
  }
  onExit(): void {
    this.settingsPageService.onExit(this.sharedService.fetchUserData().id);
  }
}
