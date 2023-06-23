import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
interface student {
  Name: string;
  Age: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  studentName: string = '';
  studentAge: string = '';
  isCheckedAge: boolean = false;
  isCheckedName: boolean = false;
  studentList: student[] = [];

  isNameInvalid(): void {
    if (this.studentName != null && this.studentName.length >= 2) {
      this.isCheckedName = true;
    } else {
      this.isCheckedName = false;
    }
  }
  isAgeInvalid(): void {
    if (this.studentAge != null && Number(this.studentAge) > 18) {
      this.isCheckedAge = true;
      console.log('If Case');
      console.log(this.isCheckedAge);
    } else {
      console.log('Else Case');

      this.isCheckedAge = false;
      console.log(this.isCheckedAge);
    }
  }
  addStudent() {
    if (this.isCheckedAge && this.isCheckedName) {
      this.studentList.push({ Name: this.studentName, Age: this.studentAge });
    }
  }
  deleteStudent(i: number) {
    this.studentList = this.studentList.filter((item, index) => index != i);
  }
}
