import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
    user = { 
    email: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  onSubmit() {

    this.userService.registerUser(this.user).subscribe(
      (response) => {

        console.log('Registration successful:', response);

      },
      (error) => {
        console.error('Registration error:', error);

      }
    );
  }
}
