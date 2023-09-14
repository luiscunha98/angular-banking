import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})

export class AuthButtonsComponent {

  signIn() {
    console.log('Sign In button clicked');
  }

  signUp() {
    console.log('Sign Up button clicked');
  }
}
