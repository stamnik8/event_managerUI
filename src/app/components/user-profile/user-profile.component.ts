import { TicketService } from './../../services/ticket.service';
import { AuthenticationService } from './../../services/authenticate.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit} from '@angular/core';
import { User } from '../../model/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  name: string
  id: string;
  public reservations;
  user:User;
  eventName;
  public errormsg;
  displayedColumns: string[] = ['reservationDate', 'reservationName', 'reservationTotal', 'status', 'cancel'];

    
  constructor(private userService:UserService,private authService:AuthenticationService) {}


  ngOnInit() {
    this.getReservations();
  }

  getReservations(){
      this.user= this.authService.currentUser();
      this.userService.getReservations(this.user.id).subscribe(
        data => {this.reservations = data},
        error => this.errormsg = error
      );
  }

  // getEventName2(id){
  //   return this.ticketService.getEventName(id).subscribe(data => this.eventName = data);
  // }

  cancelReservation(id, i){
    this.userService.cancelReservation(id).subscribe(data => {
      let cancelledItem = this.reservations.find(function(elem){
        return elem.id === id
      });
      
      console.log(cancelledItem);
      cancelledItem.status = 'CANCELED';
    });
    document.getElementById('status' + i).innerHTML = "CANCELED";
  }
}
