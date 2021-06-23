import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  resetForm: FormGroup;
  public error;
  data;

  constructor(private formBuilder: FormBuilder,
     private router: Router,private userService:UserService) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      username: ''
    });
  }

  get formValues(){
    return this.resetForm.controls;
  }

  onSubmit(){
    this.error = "";
    this.userService.forgotPassword(this.formValues.username.value).subscribe(
      data=>{
        this.data = data
        this.router.navigate(['/login']);
      },
      error=> this.error = error
    ); 
  }
}
