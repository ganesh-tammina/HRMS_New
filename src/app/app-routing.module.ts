import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutsComponent } from './Layouts/layouts/layouts.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeesComponent } from './Pages/employees/employees.component';
import { AttendanceComponent } from './Pages/attendance/attendance.component';
import { TimesheetsComponent } from './Pages/timesheets/timesheets.component';
import { LeavesComponent } from './Pages/leaves/leaves.component';
import { FinanceComponent } from './finance/finance.component';
import { PayrollComponent } from './finance/payroll/payroll.component';
import { SalaryComponent } from './finance/salary/salary.component';
import { UploadsComponent } from './Pages/uploads/uploads.component';
import { MasterComponent } from './Pages/master/master.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'timesheets', component: TimesheetsComponent },
      { path: 'leaves', component: LeavesComponent },
      { path: 'finance', component: FinanceComponent },
      { path: 'finance/payroll', component: PayrollComponent },
      { path: 'finance/salary', component: SalaryComponent },
      { path: 'uploads', component: UploadsComponent },
      { path: 'master', component: MasterComponent },


      // Placeholder for AttendanceComponent
      // Placeholder for AttendanceComponent
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
