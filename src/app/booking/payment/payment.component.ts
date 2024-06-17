import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(private busService: BusService, private router: Router) {}

  bookingDetailsIn = history.state.bookingSummary;

  bookingSummary: any;

  transactionID = Math.random().toString(8).substr(2, 9);

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ];
  years = [
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
    '2031',
    '2032',
    '2033',
    '2034',
    '2035',
  ];

  // Regex Patterns

  cardNumberPattern = '^[0-9]{16}$';
  cardNamepattern = '[a-zA-Z ]*';
  CvvPattern = '^[0-9]{3}$';

  //Form
  paymentForm: FormGroup;

  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      cardType: new FormControl(null, [Validators.required]),
      cardNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.cardNumberPattern),
      ]),
      cardName: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.cardNamepattern),
      ]),
      cvv: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.CvvPattern),
      ]),
      expiry: new FormControl(null, Validators.required),
    });
  }

  //GETTERS

  get cardType() {
    return this.paymentForm.get('cardType');
  }

  get cardNumber() {
    return this.paymentForm.get('cardNumber');
  }
  get cardName() {
    return this.paymentForm.get('cardName');
  }
  get cvv() {
    return this.paymentForm.get('cvv');
  }

  get expiry() {
    return this.paymentForm.get('expiry');
  }

  //Sending Booking Summary to Ticket component

  confirmPayment() {
    this.bookingSummary = {
      from: this.bookingDetailsIn.from,
      to: this.bookingDetailsIn.to,
      date: this.bookingDetailsIn.date,
      busType: this.bookingDetailsIn.busType,
      fare: this.bookingDetailsIn.fare,
      totalSelectedSeats: this.bookingDetailsIn.totalSelectedSeats,
      seats: this.bookingDetailsIn.seats,
      totalAmount: this.bookingDetailsIn.totalAmount,
      passengerName: this.bookingDetailsIn.passengerName,
    };
    const navigationExtras: NavigationExtras = {
      state: {
        bookingSummary: this.bookingSummary
      }
    };
    this.router.navigateByUrl('/ticket-confirmation', navigationExtras)
  }
}
