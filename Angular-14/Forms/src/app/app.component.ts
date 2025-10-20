import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultValue: string = 'pet';
  answer: string = '';
  genders: string[] = ['Male', 'Female'];
  defaultGender: string = this.genders[0];
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(userForm: NgForm) {
    console.log(userForm);
    console.log(userForm.value.userData.username);
  }
  clickHere() {
    console.log(this.defaultValue);
  }
}
