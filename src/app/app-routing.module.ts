import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./flights/index/index.component";

const routes: Routes = [
  { path: '', redirectTo: 'Flights', pathMatch: 'full' },
  { path: 'Flights', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
