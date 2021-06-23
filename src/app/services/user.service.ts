import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, throwError } from '../../../node_modules/rxjs';
import 'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUserById(id): Observable<User>{
    return this.http.get<User>(`api/users/${id}`) as Observable<User>;
  }
  
  createUser(user: User): Observable<User>{
    return this.http.post<User>('api/users', user, httpOptions).catch(this.handleError);
  }

  getReservations(id){
    return this.http.get('/api/users/' + id + '/reservations');
  }

  cancelReservation(id) {
    return this.http.delete('/api/reservations/' + id);
  }

  forgotPassword(username){
    return this.http.patch('/api/users/' + username + '/forgot', httpOptions).catch(this.handleError);
  }

  updatePassword(id, oldPass, newPass){
    return this.http.put(`api/users/${id}?oldPass=${oldPass}&newPass=${newPass}`, httpOptions).catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      return throwError( `An error occured: ${error.error.message} `);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong, 
     return throwError(` ${error.error.message}`);
    }
  }
 
}
