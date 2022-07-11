import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreatePageComponent } from "./create-page/create-page.component";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { EditPageComponent } from "./edit-page/edit-page.component";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'create', component: CreatePageComponent},
      {path: 'questionaire/:id/edit', component: EditPageComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }