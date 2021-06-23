import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users;
  userShow: boolean;
  error;
  
  constructor(private formBuilder: FormBuilder , private userService: UserService, private router: Router) { }

  addForm: FormGroup;

  ngOnInit() {   
    this.userShow = false;

    this.addForm = this.formBuilder.group({
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      username: '',
      firstName:'',
      lastName: '',
      password: ['',[
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]]
    });
  }


  get email() {
    return this.addForm.get('email');
  }

  get password() {
    return this.addForm.get('password');
  }

  onSubmit(){
    const formValue = this.addForm.value;

    this.userService.createUser(formValue)
      .subscribe(user =>{
          this.users = user;
          this.router.navigate(['/login']);
        },
        error => this.error = error);
  }
}
