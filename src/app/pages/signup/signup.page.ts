import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  fullName: string = '';
  email: string = '';
  password: string = '';
  agreeTerms: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    // Here you would typically handle the signup logic
    console.log('Signup submitted', this.fullName, this.email, this.password);
    // Navigate to the basic info page after successful signup
    this.router.navigate(['/basic-info']);
  }
}