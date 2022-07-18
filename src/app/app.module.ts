import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuestionaireComponent } from './shared/components/questionaire/questionaire.component';
import { QuestionairePageComponent } from './questionaire-page/questionaire-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './shared/components/question/question.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ConfirmPasswordDirective } from './_helpers/confirm-password.directive';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { SharedModule } from './shared/shared/shared.module';
import { LeaderboardPageComponent } from './leaderboard-page/leaderboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    QuestionaireComponent,
    LoginPageComponent,
    QuestionaireComponent,
    QuestionairePageComponent,
    QuestionComponent,
    RegisterPageComponent,
    ConfirmPasswordDirective,
    ProfilePageComponent,
    LeaderboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
