import { Component, OnInit, NgModule } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { EventService } from '../../services/event.service';
import { Reservation } from '../../model/reservation';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  reports;
  user: User;
  event;
  buttonDisabled: boolean = false;
  passReport;
  displayedColumns: string[] = ['reservationDate', 'user', 'totalTickets', 'status', 'cancel'];
  reportTab: boolean = true;

  constructor(private adminService:AdminService,private userService:UserService,private eventService: EventService) { }

  ngOnInit() {
    this.getReport();
  }

  getReport(){
    return this.adminService.getReport().subscribe(data=>this.reports=data);
  }

  cancelReservation(id,i){
    this.userService.cancelReservation(id).subscribe(data => {
      let cancelledItem = this.reports.find(function (elem) {
        return elem.id === id
      });
      cancelledItem.status = 'CANCELED';
    });;
    document.getElementById('status'+i).innerHTML = "CANCELED"
  }

  getPasswordsReport(){
    this.adminService.getForgotPasswords().subscribe(
      data=>this.passReport=data
    );
  }

  resetUsersPass(id) {
    this.adminService.resetPassword(id).subscribe();
  }

  swapTabs(tab){
    if(tab === 'report'){
      this.reportTab = true;
    }else{
      this.reportTab = false;
    }   
  }
}
