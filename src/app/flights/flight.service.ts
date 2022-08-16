import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, of } from 'rxjs';

import { Flight, FlightDTO } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  //switch out these lines once swagger is running...
  //private musicUrl = 'http://localhost:7004/api/Music';
  private flightUrl = 'api/Flight';

private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

constructor(private http: HttpClient) { }

getSongs(): Observable<Flight[]> {
  return this.http.get<Flight[]>(this.flightUrl, this.httpOptions);
}

getFlight(id: number): Observable<Flight> {
  let url = `${this.flightUrl}/${id}`;
  return this.http.get<Flight>(url, this.httpOptions);
}

createFlight(flight: Flight): Observable<Flight> {
  return this.http.post<Flight>(this.flightUrl, flight, this.httpOptions);
}

updateFlight(flight: Flight): Observable<Flight> {
  let url = `${this.flightUrl}/${flight.id}`;
  return this.http.put<Flight>(url, flight, this.httpOptions);
}

deleteFlight(id: Number): Observable<Flight> {
  return this.http.delete<Flight>(`${this.flightUrl}/${id}`, this.httpOptions);
}

// errorHandler(error: any, caught: Observable<Flight[]>) {
//   let errorMessage = '';
//   if (error.error instanceof ErrorEvent) {
//     // get client side error
//     errorMessage = error.error.message;
//   } else {
//     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     return throwError(() => new Error(errorMessage));
//   }
// }

}