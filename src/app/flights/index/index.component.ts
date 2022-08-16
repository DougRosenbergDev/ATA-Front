import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  flights: Flight[] = [];

//ask angular to inject our musicService
  constructor(private travelService: TravelService) { }

  // initialization of the component
  ngOnInit(): void {
    this.retrieveFlights();
  }

  retrieveFlights(): void {
    this.travelService.getSongs().subscribe(flights => this.flights = flights);
  }

// provide a way 
// retrieveSongs() : void {
//   this.musicService.getSongs().subscribe(songs => this.songs = songs);
// }

}