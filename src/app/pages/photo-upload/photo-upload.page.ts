import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.page.html',
  styleUrls: ['./photo-upload.page.scss'],
})
export class PhotoUploadPage {
  selectedFile: File | null = null;
  photos: string[] = [];
  selectedPhoto: string = '';

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photos.push(e.target.result);
        this.selectedFile = null;
        // Reset the file input
        const fileInput = document.getElementById('photoUpload') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  openPhotoModal(index: number) {
    this.selectedPhoto = this.photos[index];
    // Using vanilla JavaScript to open the modal
    const modal = document.getElementById('photoModal');
    if (modal) {
      (modal as any).modal('show');
    }
  }
}