import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminQuestionaireComponent } from './shared/components/admin-questionaire/admin-questionaire.component';
import { CreateFormComponent } from './shared/components/create-form/create-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CreatePageComponent } from './create-page/create-page.component';
import { ProfileWidgetComponent } from "../shared/components/profile-widget/profile-widget.component";
import { SharedModule } from "../shared/shared/shared.module";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardPageComponent,
    EditPageComponent,
    AdminQuestionaireComponent,
    CreateFormComponent,
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule {

}