import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user.model";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  loginForm: boolean = true;
  user: User;
  errorMessage: string = '';
  errorSub: Subscription;

  // Checking password (need 1 capital letter, 1 number, 1 symbol and min. 8 signs)
  pattern: string | RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData'));
    this.errorSub = this.authService.errorMessage.subscribe(
      err => {
        this.errorMessage = err;
      }
    )
  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onPageSwitch(): void {
    this.loginForm = !this.loginForm;
    this.errorMessage = '';
  }

  onSubmit(form: NgForm): void {
      if (this.loginForm) {
        this.authService.onSignin(form.form.value.login, form.form.value.password);
      } else {
        this.authService.onSignup(form.form.value.login, form.form.value.password);
      }
  }
}
