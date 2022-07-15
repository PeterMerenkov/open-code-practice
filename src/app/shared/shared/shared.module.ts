import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileWidgetComponent } from '../components/profile-widget/profile-widget.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProfileWidgetComponent,
    RouterModule
  ]
})
export class SharedModule { }
