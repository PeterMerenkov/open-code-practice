import { Component, OnInit } from '@angular/core';
import { Questionaire } from '../interface/questionaire';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  questionaires: Questionaire[]= [];

  constructor() { }

  ngOnInit(): void {
  }

}
