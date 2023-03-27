import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Band } from '../interface/general-interface';

@Injectable({
  providedIn: 'root'
})
export class BandService {
   baseUrl: string = 'band';

  constructor(private http: HttpClient) { }

  saveBand(band: Band) {
    return this.http.post(`${ environment.api_url + this.baseUrl }`, band );
  }

  getAllBands() {
    return this.http.get(`${ environment.api_url + this.baseUrl }`);
  }

 
}
