import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.css'],
})
export class SelectSeatsComponent implements OnInit {
  constructor(private router: Router) {}

  busDetails = history.state.detailsOfBus;

  UnavailableSeats: any[] = [];

  ngOnInit(): void {
    this.UnavailableSeats = this.busDetails.reservedSeats;
    this.seats = [...new Array(this.busDetails.totalSeats)].map((item, index) => {
      return {
        isSelected: false,
        seatno: index + 1,
      };
    });
  }

  seatsSelection: any[] = [];

  totalSeats = 0;

  totalSelectedSeats: number = 0;

  totalFare: number = 0;

  serviceTax: number = 0;

  totalCharge: number = 0;

  formvalid: boolean; //to check form status

  bookingSummary: any;

  seats: any[] = [];


  selectSeats(seatNo: any) {
    if (!this.UnavailableSeats.includes(seatNo)) {
      this.seats[seatNo - 1].isSelected = !this.seats[seatNo - 1].isSelected;
      if (!this.seatsSelection.includes(seatNo)) {
        this.seatsSelection.push(seatNo);
        this.formvalid = true;
      } else {
        this.seatsSelection.splice(this.seatsSelection.indexOf(seatNo), 1);
        if (this.seatsSelection.length === 0) this.formvalid = false;
      }
    }
    this.totalSelectedSeats = this.seatsSelection.length;
    this.totalFare = this.busDetails.fare * this.totalSelectedSeats;
    this.serviceTax = this.totalFare / 10;
    this.totalCharge = this.totalFare + this.serviceTax;
  }

  //Sending bookingSummary to Payment Component

  confirmBooking(form: any) {
    this.bookingSummary = {
      id: this.busDetails.id,
      from: this.busDetails.from,
      to: this.busDetails.to,
      date: this.busDetails.date,
      busType: this.busDetails.busType,
      fare: this.busDetails.fare,
      available: this.busDetails.available,
      totalSelectedSeats: this.totalSelectedSeats,
      seats: this.seatsSelection,
      totalAmount: this.totalCharge,
      passengerName: Object.values(form.value),
    };
    const navigationExtras: NavigationExtras = {
      state: {
        bookingSummary: this.bookingSummary
      }
    };
    this.router.navigateByUrl('/payment', navigationExtras)

  }
}
