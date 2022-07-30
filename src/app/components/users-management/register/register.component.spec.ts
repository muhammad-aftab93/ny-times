import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from "@angular/router/testing";
import {FormBuilder} from "@angular/forms";
import {UsersManagementService} from "../../../services/users-management.service";
import {UsersManagementServiceMock} from "../../../mocks/mocked-services/users-management-service-mock";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [RegisterComponent],
      providers: [
        RegisterComponent,
        FormBuilder,
        { provide: UsersManagementService, useClass: UsersManagementServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should return error when email is missing', () => {
    component.registerForm.setValue({ email: '', password: 'password' });
    component.onRegister(component.registerForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });

  it('should return error when password is missing', () => {
    component.registerForm.setValue({ email: 'username', password: '' });
    component.onRegister(component.registerForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });

  it('should return error when email and password are missing', () => {
    component.registerForm.setValue({ email: '', password: '' });
    component.onRegister(component.registerForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });
});
