import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';


@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  isCollapsed = false;
  isFinanceOpen = false;


  constructor(private router: Router, private loginService: LoginServiceService) { }

  ngOnInit(): void {

  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  toggleFinance() {
    if (!this.isCollapsed) {
      this.isFinanceOpen = !this.isFinanceOpen;
    }
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  logout(): void {
    if (confirm('Are you sure you want to logout?')) {
      this.loginService.logout();
    }
  }
}
