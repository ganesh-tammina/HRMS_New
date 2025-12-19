import { Component } from '@angular/core';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent {

  files: any = {};
  progress: any = {};
  history: any[] = [];

  toast = {
    show: false,
    message: '',
    type: 'success' // success | error
  };

  onFileSelect(event: any, type: string) {
    const file = event.target.files[0];

    if (!file || !file.name.match(/\.(xls|xlsx)$/)) {
      this.showToast('Only Excel files are allowed', 'error');
      return;
    }

    this.files[type] = file;
  }
  removeFile(type: string) {
    this.files[type] = null;
    this.progress[type] = 0;
  }

  upload(type: string) {
    if (!this.files[type]) {
      this.showToast('Please select a file first', 'error');
      return;
    }

    this.progress[type] = 0;

    const timer = setInterval(() => {
      this.progress[type] += 10;

      if (this.progress[type] >= 100) {
        clearInterval(timer);

        // SUCCESS
        this.history.unshift({
          type,
          file: this.files[type].name,
          date: new Date().toLocaleString()
        });

        this.showToast(`${type.toUpperCase()} uploaded successfully`, 'success');
        this.files[type] = null;
      }
    }, 200);
  }
  showToast(message: string, type: 'success' | 'error') {
    this.toast.message = message;
    this.toast.type = type;
    this.toast.show = true;

    setTimeout(() => {
      this.hideToast();
    }, 3000);
  }

  hideToast() {
    this.toast.show = false;
  }
}
