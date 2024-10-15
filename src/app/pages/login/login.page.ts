import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Here you would typically handle the login logic
    console.log('Login submitted', this.email, this.password);
    // For now, we'll just navigate to the profile page
    this.router.navigate(['/profile']);
  }
}