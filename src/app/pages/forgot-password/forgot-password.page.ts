import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  email: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Here you would typically handle the password reset logic
    console.log('Password reset requested for', this.email);
    // For now, we'll just navigate back to the login page
    this.router.navigate(['/login']);
  }
}