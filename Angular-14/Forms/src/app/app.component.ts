import { Component, ViewChild } from '@angular/core';
import { Form, NgForm, NgModel } from '@angular/forms';

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
  defaultUserName: string = '';
  user = {
    userData: {
      username: '',
      email: '',
    },
    secret: '',
    questionAnswer: '',
    gender: '',
  };
  isSubmit: boolean = false;
  @ViewChild('nameCtrl') ngname!: NgModel;
  suggestUserName(userForm: NgForm) {
    // userForm.setValue({
    //   userData: {
    //     username: 'Fuad',
    //     email: '',
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '',
    //   gender: 'Female',
    // });
    // this.defaultUserName = 'Fuad Hasan';
    userForm.form.patchValue({
      userData: {
        username: 'Fuad Hasan',
      },
    });
  }

  onSubmit(userForm: NgForm) {
    this.isSubmit = true;
    // this.user.name = userForm.value.userData.username;
    // this.user.email = userForm.value.userData.email;
    // this.user.secret = userForm.value.secret;
    // this.user.questionAnswer = userForm.value.questionAnswer;
    // this.user.gender = userForm.value.gender;

    this.user = {
      ...userForm.value,
      userData: { ...userForm.value.userData },
    };
    this.user.userData.username = 'Test';
  }
  clickHere() {
    console.log(this.defaultValue);
  }
}
