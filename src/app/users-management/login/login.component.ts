import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SpinnerService} from "../../services/spinner.service";
import {User} from "../../models/user";
import {UsersManagementService} from "../../services/users-management.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private spinner: SpinnerService,
              private usersService: UsersManagementService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogin(loginForm: FormGroup) {

    if (loginForm.invalid) {
      return;
    }

    let user: User = { email: loginForm.value.email, password: loginForm.value.password };
    this.spinner.show();
    this.usersService
      .loginUser(user)
        .subscribe({
          next: (result) => {
            let token = result['access_token'];
            alert(token);
            this.spinner.hide();
          },
          error: (e) => {
            this.spinner.hide();
            alert(e['message']);
          },
          complete: () => {
            this.spinner.hide();
            console.info('complete');
          }
        });
  }
}
