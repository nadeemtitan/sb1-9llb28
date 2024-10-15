import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.page.html',
  styleUrls: ['./basic-info.page.scss'],
})
export class BasicInfoPage {
  basicInfo = {
    fullName: '',
    dateOfBirth: '',
    gender: '',
    bio: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Basic info submitted:', this.basicInfo);
    // Here you would typically send this data to a server
    // For now, we'll just navigate to the photo upload page
    this.router.navigate(['/photo-upload']);
  }
}