import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { resolve } from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];
  projectForm!: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required], // sync validators
        [this.forbiddenProjectNameAsync.bind(this)] // async validators
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('Critical', [Validators.required]),
    });
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'Test') {
      return { projectNameIsForbidden: true };
    } else {
      return null;
    }
  }

  // forbiddenProjectNameAsync(control: AbstractControl): Promise<{ [s: string]: boolean }> | null {
  //   const promise = new Promise<ValidationErrors, null>({
  //     resolve=>{
  //             setTimeout(() => {
  //       if (control.value === 'test@test.com') {
  //         resolve({ emailIsForbidden: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //     }
  //   });
  //   return promise;
  //   // if (control.value === 'Test') {
  //   //   return { projectNameIsForbidden: true };
  //   // } else {
  //   //   return null;
  //   // }
  // }

  forbiddenProjectNameAsync(
    control: AbstractControl
  ): Promise<{ [s: string]: boolean } | null> {
    const promise = new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ projectNameIsForbiddenAsync: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
  onSubmit() {
    console.log(this.projectForm.get('projectName')?.value);
    console.log(this.projectForm.get('email')?.value);
    console.log(this.projectForm.get('projectStatus')?.value);
  }
}
