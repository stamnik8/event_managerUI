import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Reservation } from '../model/reservation';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  createReservation(reservation: Reservation) : Observable<Reservation>{
    return this.http.post<Reservation>('api/reservations', reservation , httpOptions) as Observable<Reservation>;
  }
}
