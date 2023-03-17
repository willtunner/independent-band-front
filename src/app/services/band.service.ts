import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor(private http: HttpClient) { }

  saveBand(band: any) {
    return this.http.post(`${environment.api_band}/save-band`, band );
  }
}
