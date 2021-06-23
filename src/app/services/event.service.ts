import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>("api/events") as Observable<Event[]>;
  }

  getEventById(id): Observable<Event> {
    return this.http.get<Event>(`api/events/${id}`) as Observable<Event>;
  }
}
