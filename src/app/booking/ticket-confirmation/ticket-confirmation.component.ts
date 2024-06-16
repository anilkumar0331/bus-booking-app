import { Component, Input, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// import {
//   NgxQrcodeElementTypes,
//   NgxQrcodeErrorCorrectionLevels,
// } from 'ngx-qrcode2';

@Component({
  selector: 'app-ticket-confirmation',
  templateUrl: './ticket-confirmation.component.html',
  styleUrls: ['./ticket-confirmation.component.css'],
})
export class TicketConfirmationComponent implements OnInit {
  constructor() {}

  ticketDetails = history.state.bookingSummary;

  value: any;
  details: any;
  ngOnInit(): void {
    this.value = {
      Travels: 'AnilTravels',
    };
    this.details = JSON.stringify(this.value);
  }

  // elementType = NgxQrcodeElementTypes.URL;
  // correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

  public downloadAsPDF() {
    let element: HTMLElement | null = document.getElementById('gpdf');

    if(element){
      html2canvas(element).then((canvas) => {
        let imgData = canvas.toDataURL('image/png');
  
        var margin = 8;
        var imgWidth = 210 - 2 * margin;
        var imgHeight = (canvas.height * imgWidth) / canvas.width + 12;
  
        var doc = new jsPDF('p', 'mm');
        var position = 8;
  
        doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
  
        doc.save('ticket.pdf');
      });
    }
    
  }
}
