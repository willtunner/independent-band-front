import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { EmailService } from 'src/app/services/email.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  form!:FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  loading = false;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ownerRef: new FormControl(null, Validators.required),
      subject: new FormControl(null, Validators.required),
      emailFrom: new FormControl(null, [Validators.required, Validators.email] ),
      emailTo: new FormControl(null, [Validators.required, Validators.email]),
      text: new FormControl(null, Validators.required),
    })
  }

  sendEmail() {
    console.log(this.form.value);
    this.loading = true;
    this.emailService.sendEmail(this.form.value).subscribe(res => {
      this.loading = false;
      console.log(res);
    });
  }

}
