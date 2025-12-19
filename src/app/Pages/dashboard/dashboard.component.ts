import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
