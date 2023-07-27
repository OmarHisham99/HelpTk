import { Component } from '@angular/core';
import { WebDataService } from 'src/app/web-data.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { style } from '@angular/animations';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  requiredForm: FormGroup | any;
  constructor(
    private webDataService: WebDataService,
    private fb: FormBuilder,
    private toastService: HotToastService,
    private _snackBar: MatSnackBar
  ) {
    this.myForm();
    this.fetchData();
  }

  contactUsInfo: any;

  fetchData(): void {
    this.getContactInfo();
  }

  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  handleRequest(): void {
    this.webDataService
      .postContactUs(this.name, this.phone.toString(), this.email, this.message)
      .subscribe(
        (data) => {
          // console.log(data);
          this.requiredForm.reset();
          this.name = '';
          this.email = '';
          this.phone = '';
          this.message = '';
          this._snackBar.open(data.message, '', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
        },
        (error) => {
          this.markAllFieldsAsTouched();
          console.log(error);
          this._snackBar.open(error.error.title, '', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
        }
      );
  }

  getContactInfo(): void {
    this.webDataService.getCompanyInfo().subscribe((data) => {
      this.contactUsInfo = data.data;
      // console.log(this.contactUsInfo);
    });
  }

  markAllFieldsAsTouched() {
    Object.keys(this.requiredForm.controls).forEach((field) => {
      const control = this.requiredForm.get(field);
      control?.markAsTouched();
    });
  }
}
