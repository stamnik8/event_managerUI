import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  paymentForm: FormGroup;
  
  public carts = [];
  cost: number = 0;
  totalTickets: number = 0;
  arrayLength: number;
  
  //Variables for transaction progress
  loading = false;
  success = false;
  
  constructor(private formBuilder: FormBuilder, 
              private reservationService: ReservationService,
              private router: Router) { }

  ngOnInit() {

    //Initialize Form but no use in this case. No validation or action required
    this.paymentForm = this.formBuilder.group({});

    //Getting total tickets and value of them.
    this.carts = JSON.parse(localStorage.getItem('currentCart'));
    this.arrayLength = this.carts.length;
    for(let i=0; i < this.arrayLength; i++){
      this.totalTickets += this.carts[i].count;
      this.cost += this.carts[i].cost;
    }
  }

  //Do the reservation from reservation service
  doReservation(){
    for (let i = 0; i < this.arrayLength; i++) {
      this.reservationService.createReservation(this.carts[i]).subscribe();
    }
    localStorage.removeItem('currentTickets');
    localStorage.removeItem('currentCart');

    //Fake transaction loaders :D
    this.loading = true;
    setTimeout(()=>{
      this.success = true;
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 4000);
    },5000);
  }
}
