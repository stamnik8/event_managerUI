import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '../../../../node_modules/@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.css']
})
export class UpdatePassComponent implements OnInit {

  updateForm: FormGroup;
  user: User;
  error;
  data: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      password: '',
      newPassword: ''
    });

    this.user = JSON.parse(localStorage.getItem('currentUser'))
  }

  //Get input fields from form
  get formValues() {
    return this.updateForm.controls;
  }


  onSubmit() {
    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
    }

    this.userService.updatePassword(this.user.id,this.formValues.password.value, this.formValues.newPassword.value)
      .subscribe(data => {
        this.data = data;
        this.user.forgotPassword = false;
        localStorage.setItem('currentUser',JSON.stringify(this.user));
        this.router.navigate(['/home']);
      },
      error => this.error = error);
  }
}
