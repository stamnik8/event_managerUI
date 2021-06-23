import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Reservation } from '../model/reservation';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getReport(){
    return this.http.get('/api/reservations');
  }

  getForgotPasswords(){
    return this.http.get('/api/users/forgotReport');
  }

  resetPassword(id){
    return this.http.patch('/api/users/' + id, httpOptions);
  }
}
