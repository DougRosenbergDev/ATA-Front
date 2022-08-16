import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PIndexComponent } from "./pindex/index.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
    { path: 'Person', redirectTo: 'Person/index', pathMatch: 'full' },
    { path: 'Person/index', component: PIndexComponent },
    { path: 'Person/create', component: CreateComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule {}