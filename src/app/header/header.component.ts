import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  logo = '';

  constructor(private busService: BusService) {
    this.logo = this.busService.getLogo();
  }


}
