import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeesComponent } from './Pages/employees/employees.component';
import { LayoutsComponent } from './Layouts/layouts/layouts.component';
import { SideMenuComponent } from './Layouts/side-menu/side-menu.component';
import { AttendanceComponent } from './Pages/attendance/attendance.component';
import { TimesheetsComponent } from './Pages/timesheets/timesheets.component';
import { LeavesComponent } from './Pages/leaves/leaves.component';
import { FinanceComponent } from './finance/finance.component';
import { PayrollComponent } from './finance/payroll/payroll.component';
import { SalaryComponent } from './finance/salary/salary.component';
import { UploadsComponent } from './Pages/uploads/uploads.component';
import { MasterComponent } from './Pages/master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeesComponent,
    LayoutsComponent,
    SideMenuComponent,
    AttendanceComponent,
    TimesheetsComponent,
    LeavesComponent,
    FinanceComponent,
    PayrollComponent,
    SalaryComponent,
    UploadsComponent,
    MasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
