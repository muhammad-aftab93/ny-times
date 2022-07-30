import { TestBed } from '@angular/core/testing';

import { UsersManagementService } from './users-management.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('UsersManagementService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let usersService: UsersManagementService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    usersService = new UsersManagementService(httpClientSpy);
  });

  it('login method must return token when valid credentials', (done: DoneFn) => {
    // Arrange
    let user: User = { email: 'bruno@email.com', password: 'bruno'};
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE2NTkwMzk5NzIsImV4cCI6MTY1OTA0MzU3Mn0.Bveq_soWfvVAIJkhbR4FgXoMRlK7ha91o2zNEghhy88';
    httpClientSpy.post.and.returnValue(of(token));

    // Act
    usersService.loginUser(user).subscribe({
      next: result => {
        expect(result)
          .withContext('expected token')
          .toEqual(token);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('registerUser method must return token when valid credentials', (done: DoneFn) => {
    // Arrange
    let user: User = { email: 'bruno@email.com', password: 'bruno'};
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE2NTkwMzk5NzIsImV4cCI6MTY1OTA0MzU3Mn0.Bveq_soWfvVAIJkhbR4FgXoMRlK7ha91o2zNEghhy88';
    httpClientSpy.post.and.returnValue(of(token));

    // Act
    usersService.registerUser(user).subscribe({
      next: result => {
        expect(result)
          .withContext('expected token')
          .toEqual(token);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
