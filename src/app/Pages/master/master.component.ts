import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  activeTab = 'locations';

  /* ========== LOCATIONS ========== */
  locations: any[] = [];
  showLocationForm = false;
  locationName = '';
  editingLocationId: number | null = null;

  /* ========== DEPARTMENTS ========== */
  departments: any[] = [];
  showDepartmentForm = false;
  departmentName = '';
  editingDepartmentId: number | null = null;

  constructor(private masterService: MasterService) { }

  ngOnInit(): void {
    this.loadLocations();
  }

  /* ================= TAB ================= */
  setTab(tab: string) {
    this.activeTab = tab;

    if (tab === 'locations') this.loadLocations();
    if (tab === 'departments') this.loadDepartments();
  }

  /* ================= LOCATIONS ================= */
  loadLocations() {
    this.masterService.getLocations().subscribe(res => {
      this.locations = res;
    });
  }

  openAddLocation() {
    this.showLocationForm = true;
    this.locationName = '';
    this.editingLocationId = null;
  }

  saveLocation() {
    if (!this.locationName.trim()) return;

    this.masterService
      .createLocation({ name: this.locationName })
      .subscribe(() => {
        this.loadLocations();
        this.cancelLocation();
      });
  }

  editLocation(item: any) {
    this.showLocationForm = true;
    this.locationName = item.name;
    this.editingLocationId = item.id;
  }

  updateLocation() {
    if (!this.editingLocationId) return;

    this.masterService
      .updateLocation(this.editingLocationId, { name: this.locationName })
      .subscribe(() => {
        this.loadLocations();
        this.cancelLocation();
      });
  }

  deleteLocation(id: number) {
    if (!confirm('Delete location?')) return;

    this.masterService.deleteLocation(id).subscribe(() => {
      this.loadLocations();
    });
  }

  cancelLocation() {
    this.showLocationForm = false;
    this.locationName = '';
    this.editingLocationId = null;
  }

  /* ================= DEPARTMENTS ================= */
  loadDepartments() {
    this.masterService.getDepartments().subscribe(res => {
      this.departments = res;
    });
  }

  openAddDepartment() {
    this.showDepartmentForm = true;
    this.departmentName = '';
    this.editingDepartmentId = null;
  }

  saveDepartment() {
    if (!this.departmentName.trim()) return;

    this.masterService
      .createDepartment({ name: this.departmentName })
      .subscribe(() => {
        this.loadDepartments();
        this.cancelDepartment();
      });
  }

  editDepartment(item: any) {
    this.showDepartmentForm = true;
    this.departmentName = item.name;
    this.editingDepartmentId = item.id;
  }

  updateDepartment() {
    if (!this.editingDepartmentId) return;

    this.masterService
      .updateDepartment(this.editingDepartmentId, { name: this.departmentName })
      .subscribe(() => {
        this.loadDepartments();
        this.cancelDepartment();
      });
  }

  deleteDepartment(id: number) {
    if (!confirm('Delete department?')) return;

    this.masterService.deleteDepartment(id).subscribe(() => {
      this.loadDepartments();
    });
  }

  cancelDepartment() {
    this.showDepartmentForm = false;
    this.departmentName = '';
    this.editingDepartmentId = null;
  }
}
