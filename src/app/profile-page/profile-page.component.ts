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

  userData = {
    email: '',
    username: '',
    role: ''
  }

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.userData = this.auth.getUserDate();
  }

}
