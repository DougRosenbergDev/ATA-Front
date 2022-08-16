import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
    { path: 'travel', redirectTo: 'travel/index', pathMatch: 'full' },
    { path: 'travel/index', component: IndexComponent },
    { path: 'travel/create', component: CreateComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TravelRoutingModule {}