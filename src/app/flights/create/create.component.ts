import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TravelService } from '../travel.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class FCreateComponent implements OnInit {
  public newFlightForm!: FormGroup

  constructor(
    private travelService: TravelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newFlightForm = new FormGroup({
      FlightNumber: new FormControl('', Validators.required),
      DepartureDate: new FormControl('', Validators.required),
      ArrivalDate: new FormControl('', Validators.required),
      DepartureTime: new FormControl('', Validators.required),
      ArrivalTime: new FormControl('', Validators.required),
      DepartureAirport: new FormControl('', Validators.required),
      ArrivalAirport: new FormControl('', Validators.required),
      PassengerLimit: new FormControl('', Validators.required)
    });
  }

  get f() { return this.newFlightForm.controls; }

  submit(){
    this.travelService.createFlight(this.newFlightForm.value).subscribe(() => {
      console.log(this.newFlightForm.value);
      console.log(this.newFlightForm.valid);
      console.log("Flight created successfully");
      this.router.navigateByUrl('Flights/index');
    });   
  }
}
