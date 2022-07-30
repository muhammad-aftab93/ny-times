import {ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {UsersManagementService} from "../../../services/users-management.service";
import {UsersManagementServiceMock} from "../../../mocks/mocked-services/users-management-service-mock";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        LoginComponent,
        FormBuilder,
        { provide: UsersManagementService, useClass: UsersManagementServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should return error when email is missing', () => {
    component.loginForm.setValue({ email: '', password: 'password' });
    component.onLogin(component.loginForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });

  it('should return error when password is missing', () => {
    component.loginForm.setValue({ email: 'username', password: '' });
    component.onLogin(component.loginForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });

  it('should return error when email and password are missing', () => {
    component.loginForm.setValue({ email: '', password: '' });
    component.onLogin(component.loginForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });
});
