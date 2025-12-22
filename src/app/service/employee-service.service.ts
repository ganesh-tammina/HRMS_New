import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeStateService {

  private apiUrl = 'http://localhost:3000/api/employees';

  private totalEmployeesSource = new BehaviorSubject<number>(
    Number(localStorage.getItem('totalEmployees')) || 0
  );

  totalEmployees$ = this.totalEmployeesSource.asObservable();

  constructor(private http: HttpClient) { }

  // ✅ GET ALL EMPLOYEES
  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ✅ SET TOTAL EMPLOYEES
  setTotalEmployees(count: number) {
    localStorage.setItem('totalEmployees', count.toString());
    this.totalEmployeesSource.next(count);
  }

  getTotalEmployees(): number {
    return this.totalEmployeesSource.value;
  }

  // ✅ SEARCH EMPLOYEES
  searchEmployees(keyword: string): Observable<any[]> {
    const params = new HttpParams().set('q', keyword);

    return this.http.get<any[]>(
      `${this.apiUrl}/search/query`,
      { params }
    );
  }




}
