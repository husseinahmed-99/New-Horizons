import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  imports: [CommonModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
})
export class AuthenticationComponent {
  mode: 'login' | 'signup' = 'login'; // Default to 'login'
  showSignup = true; // Default to Sign Up view
  showPassword = false; // Toggle password visibility

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.mode = params['mode'] || 'login';
    });
  }
}
