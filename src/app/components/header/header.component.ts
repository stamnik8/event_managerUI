import { Component, OnInit, Input } from '@angular/core'
import { User } from '../../model/user';
import { AuthenticationService } from '../../services/authenticate.service';
import { Cart } from '../../model/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  @Input() ticketCounter;
  @Input() cost;
  @Input() cart; 
  user: User;
  isOpened: boolean;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(){
    if (this.authenticationService.currentUser()){
      this.user = this.authenticationService.currentUser();
      console.log(this.user.forgotPassword)
    }
    this.initializeVariables();
  }

  initializeVariables() {
    if (!JSON.parse(localStorage.getItem('currentCart'))) {
      localStorage.setItem('totalCost', JSON.stringify(0));
      localStorage.setItem('currentTickets', JSON.stringify(0));
      localStorage.setItem('currentCart', JSON.stringify([]));

    }
    this.cost = Number(JSON.parse(localStorage.getItem('totalCost')));
    this.cart = (JSON.parse(localStorage.getItem('currentCart')));
    this.ticketCounter = Number(JSON.parse(localStorage.getItem('currentTickets')));
  }

  //Toggle Shopping Cart
  toggleCart(){
    if (this.isOpened){
      this.isOpened = false;
    }else{
      this.isOpened = true;
    }
  }

  resetStorage() {
    localStorage.removeItem('currentTickets');
    localStorage.removeItem('currentCart');
  }

  logout(){
    this.authenticationService.logout();
  }
}
