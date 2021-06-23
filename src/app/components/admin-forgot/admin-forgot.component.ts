import { Component, OnInit, NgModule } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { EventService } from '../../services/event.service';
import { Reservation } from '../../model/reservation';

@Component({
  selector: 'app-admin-forgot',
  templateUrl: './admin-forgot.component.html',
  styleUrls: ['./admin-forgot.component.css']
})
export class AdminForgotComponent implements OnInit {

  user: User;
  event;
  passReport;
  reseted;
  buttonDisabled: boolean = false;
  reportTab: boolean = true;

  constructor(private adminService: AdminService, private userService: UserService, private eventService: EventService) { }

  ngOnInit() {
    this.getPasswordsReport();
  }

  getPasswordsReport() {
    this.adminService.getForgotPasswords().subscribe(
      data => this.passReport = data
    );
  }

  resetUsersPass(id) {
    this.adminService.resetPassword(id).subscribe(data => {
      let cancelledItem = this.passReport.find(function (elem) {
        return elem.id === id
      });
      cancelledItem.forgotPassword = false;
    });;
  }

  swapTabs(tab) {
    if (tab === 'report') {
      this.reportTab = true;
    } else {
      this.reportTab = false;
    }
  }
}
