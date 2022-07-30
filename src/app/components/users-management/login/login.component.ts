import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SpinnerService} from "../../../services/spinner.service";
import {User} from "../../../models/user";
import {UsersManagementService} from "../../../services/users-management.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: String = '';

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersManagementService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogin(loginForm: FormGroup) {

    if (loginForm.invalid) {
      this.errorMessage = "All fields are required.";
      return;
    }

    let user: User = { email: loginForm.value.email, password: loginForm.value.password };
    this.usersService
      .loginUser(user)
        .subscribe({
          next: (result) => {
            let token = result['access_token'];
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(token));
            this.router.navigate(['dashboard/layout/main']);
          },
          error: (e) => {
            this.errorMessage = e.error['message'];
          }
        });
  }
}
