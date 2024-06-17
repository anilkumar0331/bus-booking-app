import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from '../models/bus.model';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  constructor(private http: HttpClient) {}

  private jsonUrl = 'assets/bus-details.json';

  private logo = 'assets/Images/ATLogoEdited.jpg';

  getBusDetails() : Observable<Bus[]>{
    return this.http.get<Bus[]>(this.jsonUrl);
  }

  getLogo(){
    return this.logo;
  }

}
