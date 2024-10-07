import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Dummy credentials for validation
  validUsername: string = 'admin';
  validPassword: string = '12345';

  // Define passwordType and passwordIcon
  passwordType: string = 'password'; // Initial type for the password input
  passwordIcon: string = 'eye-off-outline'; // Initial icon

  constructor(private router: Router) {}

  // Function to validate the login
  onLogin() {
    // Clear previous error message
    this.errorMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are required';
      return;
    }

    // Check credentials
    if (this.username === this.validUsername && this.password === this.validPassword) {
      // If valid, redirect to dashboard
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    // Toggle password visibility
    if (this.passwordType === 'password') {
      this.passwordType = 'text'; // Show password
      this.passwordIcon = 'eye-outline'; // Change icon to "eye"
    } else {
      this.passwordType = 'password'; // Hide password
      this.passwordIcon = 'eye-off-outline'; // Change back to "eye-off"
    }
  }
}
