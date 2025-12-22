import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AttendanceCheckInRequest {
  employee_id: number;
  source: string;
}

export interface AttendanceCheckInResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface AttendanceCheckoutResponse {
  success: boolean;
  message: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})

export class AttendanceServiceService {

  private apiUrl = 'http://localhost:3000/api/attendance';

  constructor(private http: HttpClient) { }

  // ✅ CHECK-IN API
  checkIn(
    payload: AttendanceCheckInRequest
  ): Observable<AttendanceCheckInResponse> {
    return this.http.post<AttendanceCheckInResponse>(
      `${this.apiUrl}/checkin`,
      payload
    );
  }

  // ✅ CHECK-OUT (NO BODY)
  checkOut(): Observable<AttendanceCheckoutResponse> {
    return this.http.post<AttendanceCheckoutResponse>(
      `${this.apiUrl}/checkout`,
      {}
    );
  }
}
