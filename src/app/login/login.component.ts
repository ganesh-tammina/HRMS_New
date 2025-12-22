import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';
import { EmployeeStateService } from '../service/employee-service.service';

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
    private loginService: LoginServiceService,
    private employeeService: EmployeeStateService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // onLogin(): void {

  //   if (this.loginForm.invalid) {
  //     this.loginForm.markAllAsTouched();
  //     return;
  //   }

  //   const enteredUsername = this.loginForm.value.username;

  //   this.isLoading = true;

  //   this.loginService.login(this.loginForm.value).subscribe({
  //     next: (res) => {
  //       if (res?.token) {
  //         localStorage.setItem('token', res.token);
  //         this.employeeService.getAllEmployees().subscribe({
  //           next: (employees) => {
  //             const userExists = employees.some(
  //               emp => emp.WorkEmail === enteredUsername
  //             );
  //             if (!userExists) {
  //               alert('Email does not exist. Please contact admin.');
  //               this.isLoading = false;
  //               return;
  //             }
  //             else {
  //               this.router.navigate(['/dashboard']);
  //             }

  //             // ✅ Step 2: If exists → call login API

  //           },
  //           error: () => {
  //             alert('Unable to verify user. Try again.');
  //             this.isLoading = false;
  //           }
  //         });

  //       } else {
  //         alert('Invalid credentials');
  //       }
  //       this.isLoading = false;
  //     },
  //     error: () => {
  //       alert('Login failed. Please try again.');
  //       this.isLoading = false;
  //     }
  //   });
  //   // 🔍 Step 1: Check email/username exists in employees table

  // }

  onLogin(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const enteredUsername = this.loginForm.value.username;
    this.isLoading = true;

    this.loginService.login(this.loginForm.value).subscribe({
      next: (res) => {

        if (!res?.token) {
          alert('Invalid credentials');
          this.isLoading = false;
          return;
        }

        localStorage.setItem('token', res.token);

        // 🔍 Get ONLY matched employee
        this.employeeService.getAllEmployees().subscribe({
          next: (employees) => {
            const matchedEmployee = employees.find(
              emp => emp.WorkEmail === enteredUsername
            );

            if (!matchedEmployee) {
              alert('Email does not exist. Please contact admin.');
              this.isLoading = false;
              return;
            }

            // ✅ Save logged-in employee (IMPORTANT)
            localStorage.setItem('loggedInEmployee', JSON.stringify(matchedEmployee));
            this.router.navigate(['/dashboard']);
            this.isLoading = false;
          },
          error: () => {
            alert('Unable to verify user.');
            this.isLoading = false;
          }
        });
      },
      error: () => {
        alert('Login failed. Please try again.');
        this.isLoading = false;
      }
    });
  }


}
