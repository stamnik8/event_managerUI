import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];
  eventShow: boolean = false;
  user;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventShow = true;
    this.eventService.getEvents().subscribe(events => this.events = events);
    this.user = JSON.parse(localStorage.getItem('currentUser'))
  }
}
