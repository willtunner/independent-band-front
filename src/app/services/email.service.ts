import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(email: any) {
    return this.http.post('http://localhost:8081/sending-email-with-thymeleaf', email).pipe();
  }
}
