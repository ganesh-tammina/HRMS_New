import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  isCollapsed = false;
  isFinanceOpen = false;

  constructor() { }

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
}
