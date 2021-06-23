import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  })
}

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<User> {
    return this.http.get(`/api/users/login?username=${username}&password=${password}`, httpOptions).catch(this.handleError) as Observable<User>;
  }

  setCurrentUser(currentUser: User){
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  currentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentCart');
    localStorage.removeItem('currentTickets');
    localStorage.removeItem('totalCost');
    this.router.navigate(['/login']);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      return throwError(`An error occured: ${error.error.message} `);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong, 
      return throwError(` ${error.error.message}`);
    }
  }
}
