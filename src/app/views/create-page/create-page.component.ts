import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  hasGroup: boolean = false;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    const userData = this.sharedService.fetchUserData();
    this.hasGroup = userData.groupID !== null;
  }

}
