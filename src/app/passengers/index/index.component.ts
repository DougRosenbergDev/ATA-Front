import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  passengers: Passenger[] = [];

//ask angular to inject our musicService
  constructor(private personService: PersonService) { }

  // initialization of the component
  ngOnInit(): void {
    this.retrievePassengers();
  }

  retrievePassengers(): void {
    this.personService.getPassengers().subscribe(passengers => this.passengers = passengers);
  }

}

// provide a way 
// retrieveSongs() : void {
//   this.musicService.getSongs().subscribe(songs => this.songs = songs);
// }