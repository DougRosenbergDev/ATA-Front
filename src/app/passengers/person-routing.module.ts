import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PIndexComponent } from "./pindex/index.component";
import { PCreateComponent } from "./create/create.component";

const routes: Routes = [
    { path: 'Passengers', redirectTo: 'Passengers/index', pathMatch: 'full' },
    { path: 'Passengers/index', component: PIndexComponent },
    { path: 'Passengers/create', component: PCreateComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule {}