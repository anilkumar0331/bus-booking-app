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

  getBusDetails() : Observable<Bus[]>{
    return this.http.get<Bus[]>(this.jsonUrl);
  }

  updateBusDetails(bus: any) {
    return this.http.patch('http://localhost:3000/api/updatebusdetails', bus);
  }
}
