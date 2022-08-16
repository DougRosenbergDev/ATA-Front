import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
    { path: 'Flights', redirectTo: 'Flights/index', pathMatch: 'full' },
    { path: 'Flights/index', component: IndexComponent },
    { path: 'Flights/create', component: CreateComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TravelRoutingModule {}