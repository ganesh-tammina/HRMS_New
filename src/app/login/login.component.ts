import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginServiceService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.loginService.login(this.loginForm.value)
      .subscribe({
        next: (res) => {
          if (res?.token) {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/dashboard']);
          } else {
            alert('Invalid credentials');
          }
          this.isLoading = false;
        },
        error: () => {
          alert('Login failed. Please try again.');
          this.isLoading = false;
        }
      });
  }

}
