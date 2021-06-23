import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { LocalStorage } from '@ngx-pwa/local-storage';

import { AuthenticationService } from '../../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  currentUser;
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  userShow: boolean = false;
  public error;

  constructor(
              private formBuilder: FormBuilder, 
              private authenticationService: AuthenticationService, 
              private router: Router,
              protected localStorage: LocalStorage) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:'',
      password:''
    });
  }

  //Get input fields from form
  get formValues(){
    return this.loginForm.controls;
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.formValues.username.value, this.formValues.password.value)
        .subscribe(data => {
          this.currentUser = data;
           if (this.currentUser.username === this.formValues.username.value) {
            this.authenticationService.setCurrentUser(this.currentUser);
            this.router.navigate(['/home']);}
            
        },
        error => this.error = error);
  }
}
