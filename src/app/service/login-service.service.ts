import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { decodeToken } from './Util/token.util';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) { }

  // ✅ LOGIN METHOD
  login(loginData: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, loginData);
  }

   logout(): void {
    // 1️⃣ Remove token & user data
    localStorage.removeItem('token');
    localStorage.clear(); // optional if you store more data

    // 2️⃣ Redirect to login
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
