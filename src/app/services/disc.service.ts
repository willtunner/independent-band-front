import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiscService {
  baseUrl: string = 'disc';

  constructor(private http: HttpClient) { }

  getDiscsByBand(id: number) {
    return this.http.get(`${environment.api_url + this.baseUrl}/band/${id}`);
  }
}
