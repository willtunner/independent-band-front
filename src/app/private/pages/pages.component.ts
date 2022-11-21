import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  form!:FormGroup

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ownerRef: new FormControl(null, Validators.required),
      subject: new FormControl(null),
      emailFrom: new FormControl(null),
      emailTo: new FormControl(null),
      text: new FormControl(null),
    })
  }

  sendEmail() {
    console.log(this.form.value);
    this.emailService.sendEmail(this.form.value).subscribe(res => console.log(res));
  }

}
