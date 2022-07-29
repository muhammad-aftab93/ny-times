import { Component } from '@angular/core';
import {TokenService} from "./services/token.service";
import {Observable, Subscription, interval } from "rxjs";
import {UsersManagementService} from "./services/users-management.service";
import {User} from "./models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription = new Subscription;

  constructor(private tokenService: TokenService,
              private usersService: UsersManagementService) {
    /** In case of refreshing token on the basis of expiry time. */
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE2NTkwMzk5NzIsImV4cCI6MTY1OTA0MzU3Mn0.Bveq_soWfvVAIJkhbR4FgXoMRlK7ha91o2zNEghhy88';
    // let tokenInfo = this.tokenService.getDecodedAccessToken(token);
    // let expiry = tokenInfo.exp;  // expiry date

    /** In case of refreshing token on every 15 minutes. */
    this.sub = interval(900000).subscribe(x => {
      let userStr = localStorage.getItem('user');
      let objUser: User = { email: '', password: '' };
      if(userStr)
        objUser = JSON.parse(userStr);

      this.usersService
        .loginUser(objUser)
        .subscribe({
          next: (result) => {
            let token = result['access_token'];
            localStorage.setItem('token', JSON.stringify(token));
          },
          error: (e) => {
            alert(e.error['message']);
          }
        });
    });
  }
}
