import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getCitiesByState() {
    return this.http.get(`assets/dados/states-cities.json`);
  }
}
