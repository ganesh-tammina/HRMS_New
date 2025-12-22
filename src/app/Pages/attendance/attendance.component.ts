import { Component, OnInit } from '@angular/core';
import { AttendanceCheckInRequest, AttendanceServiceService } from 'src/app/service/attendance-service.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  constructor(private attendanceService: AttendanceServiceService) { }

  ngOnInit(): void {
  }

  checkIn(): void {
    const payload: AttendanceCheckInRequest = {
      employee_id: 932,
      source: 'Web'
    };

    this.attendanceService.checkIn(payload).subscribe({
      next: (res) => {
        alert(res.message || 'Check-in successful');
      },
      error: () => {
        alert('Check-in failed');
      }
    });
  }
  checkOut(): void {
    this.attendanceService.checkOut().subscribe({
      next: (res) => {
        alert(res.message || 'Checkout successful');
      },
      error: () => {
        alert('Checkout failed');
      }
    });
  }
}
