import { Component, OnInit } from '@angular/core';
import { EmployeeStateService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];
  TotalEmployees = 0;
  searchKeyword = '';

  constructor(private employeeState: EmployeeStateService) { }

  ngOnInit(): void {
    this.allEmployees();
  }

  allEmployees() {
    this.employeeState.getAllEmployees()
      .subscribe({
        next: (res) => {
          this.employees = res;
          this.TotalEmployees = res.length;

          // ✅ Update global state
          this.employeeState.setTotalEmployees(this.TotalEmployees);

          console.log('Total Employees:', this.TotalEmployees);
        },
        error: (err) => {
          console.error('Failed to load employees', err);
        }
      });
  }
  onSearch() {
    const keyword = this.searchKeyword.trim();

    // If empty → reload all
    if (!keyword) {
      this.allEmployees();
      return;
    }

    this.employeeState.searchEmployees(keyword).subscribe({
      next: (res) => {
        this.employees = res;
        this.TotalEmployees = res.length;
      },
      error: (err) => console.error(err)
    });
  }
}
