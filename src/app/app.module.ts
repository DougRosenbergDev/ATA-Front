import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; 
//import { InMemoryDataService} from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonModule } from './passengers/person.module';
import { TravelModule } from './flights/travel.module';
// import { BookingsComponent } from './bookings/bookings.component';
// import { BindexComponent } from './bookings/bindex/bindex.component';
// import { BookingsModule } from './bookings/bookings.module';

@NgModule({
  declarations: [
    AppComponent,
    // PersonModule,
    // TravelModule,
    // BookingsComponent,
    // BindexComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    PersonModule,
    TravelModule,
    // BookingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }