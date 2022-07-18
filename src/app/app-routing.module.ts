import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LeaderboardPageComponent } from './leaderboard-page/leaderboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { QuestionairePageComponent } from './questionaire-page/questionaire-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
      {path: 'questionaire/:id', component: QuestionairePageComponent, canActivate: [AuthGuard]},
      {path: 'singup', component: RegisterPageComponent},
      {path: 'singin', component: LoginPageComponent},
      {path: 'leaderboard/:id', component: LeaderboardPageComponent, canActivate: [AuthGuard]}
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
