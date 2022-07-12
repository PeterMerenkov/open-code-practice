import { Component, OnInit } from '@angular/core';
import { Questionaire } from '../interface/questionaire';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  questionaires: Questionaire[]= [];

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.auth.getDecodedAccessToken(localStorage.getItem('auth_token') as string))
  }

}
