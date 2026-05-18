import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login-components',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-components.html',
  styleUrls: ['./login-components.scss']
})
export class LoginComponents {

  loginForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    
  }

   login() {

    // tu login

  }

  goToRegister() {

    this.router.navigate(['/register']);

  }

}

