import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { EventService } from '../../services/event.service';
import { TicketService } from '../../services/ticket.service';
import { Event } from '../../model/event';
import { Ticket } from '../../model/ticket';
import { User } from '../../model/user';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  event: Event;
  cart = [];
  tickets: Ticket[];
  eventId: string;
  user: User;
  cost;
  ticketCounter: number;
  countTicketOnCart: number;
  totalCost: number;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private ticketService: TicketService) {
              this.route.params.subscribe(params => this.eventId = params.id);
            
  }

  ngOnInit() {
    this.eventService.getEventById(this.eventId).subscribe(event => this.event = event);
    this.ticketService.getTickets(this.eventId).subscribe(ticket => this.tickets = ticket);
    this.user = JSON.parse(localStorage.getItem('currentUser'));

  }


  addToCart(ticket, event){
    
    this.initializeVariables();
    if ((this.ticketCounter<10)){
      
      let reservation = {
        ticketId: ticket.id,
        userId: this.user.id,
        type: ticket.type,
        eventName: event.eventName,
        imgUrl: event.imgUrl,
        cost: ticket.cost,
        date: new Date(),
        count: 1
      }

      this.cart = this.ticketService.groupReservations(this.cart,reservation);
      localStorage.setItem('currentCart', JSON.stringify(this.cart));
      this.cost += reservation.cost;
      localStorage.setItem('totalCost', JSON.stringify(this.cost));
      this.ticketCounter ++;
      localStorage.setItem('currentTickets', JSON.stringify(this.ticketCounter));

    }
  }

  initializeVariables(){
      if (!JSON.parse(localStorage.getItem('currentCart'))){
        localStorage.setItem('totalCost', JSON.stringify(0));
        localStorage.setItem('currentTickets', JSON.stringify(0));
        localStorage.setItem('currentCart', JSON.stringify([]));
        
      }
        this.cost = Number(JSON.parse(localStorage.getItem('totalCost')));
        this.cart = (JSON.parse(localStorage.getItem('currentCart')));
        this.ticketCounter = Number(JSON.parse(localStorage.getItem('currentTickets')));
      
  }
}
