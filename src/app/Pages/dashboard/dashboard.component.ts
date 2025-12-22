import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { EmployeeStateService } from '../../service/employee-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalEmployees = 0;
  constructor(private employeeState: EmployeeStateService) { }

  ngOnInit(): void {
    this.employeeState.totalEmployees$
      .subscribe(count => {
        this.totalEmployees = count;
        console.log('Dashboard Total Employees:', count);
      });
  }

  ngAfterViewInit(): void {
    new Chart('attendanceChart', {
      type: 'doughnut',
      data: {
        labels: ['Present', 'Absent'],
        datasets: [{
          data: [85, 15],
          backgroundColor: ['#2f86d6', '#e11d48']
        }]
      }
    });
  }
}
