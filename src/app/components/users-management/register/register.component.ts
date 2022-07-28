import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user";
import {SpinnerService} from "../../../services/spinner.service";
import {UsersManagementService} from "../../../services/users-management.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: String = '';

  constructor(private formBuilder: FormBuilder,
              private spinner: SpinnerService,
              private usersService: UsersManagementService,
              private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onRegister(registerForm: FormGroup) {
    if (registerForm.invalid) {
      return;
    }

    let user: User = { email: registerForm.value.email, password: registerForm.value.password };
    this.usersService
      .registerUser(user)
      .subscribe({
        next: (result) => {
          let token = result['access_token'];
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', JSON.stringify(token));
          this.router.navigate(['users-management']);
        },
        error: (e) => {
          this.errorMessage = e.error['message'];
        }
      });
  }
}
