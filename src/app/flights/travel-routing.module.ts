import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FIndexComponent } from "./findex/index.component";
import { FCreateComponent } from "./create/create.component";

const routes: Routes = [
    { path: 'Flights', redirectTo: 'Flights/index', pathMatch: 'full' },
    { path: 'Flights/index', component: FIndexComponent },
    { path: 'Flights/create', component: FCreateComponent },
    // { path: 'flight/:id', component: ViewComponent },
    // { path: 'Flights/edit', component: EditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TravelRoutingModule {}