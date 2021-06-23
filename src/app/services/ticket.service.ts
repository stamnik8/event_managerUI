import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../model/ticket';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getTickets(id): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`api/events/${id}/tickets`) as Observable<Ticket[]>;
  }

  groupReservations(cart, reservation) {
    var flag: boolean = false;
    if (cart.length === 0) {
      cart.push(reservation);
      return cart;
    }
    cart.forEach(element => {
      if (reservation.ticketId === element.ticketId) {
        element.count++;
        flag = true;
      }
    });
    if (!flag) {
      cart.push(reservation);
    }

    return cart;
  }
}
