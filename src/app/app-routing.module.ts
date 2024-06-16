import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanTripComponent } from './booking/plan-trip/plan-trip.component';
import { PaymentComponent } from './booking/payment/payment.component';
import { TicketConfirmationComponent } from './booking/ticket-confirmation/ticket-confirmation.component';
import { SelectSeatsComponent } from './booking/select-seats/select-seats.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'plantrip',
    component: PlanTripComponent,
  },
  {
    path: 'select-seats',
    component: SelectSeatsComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'ticket-confirmation',
    component: TicketConfirmationComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
