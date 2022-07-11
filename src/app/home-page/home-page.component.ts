import { Component, OnInit } from '@angular/core';
import { Questionaire } from '../interface/questionaire';
import { QuestionaireService } from '../_services/questionaire.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  questionaires: Questionaire[]= [];

  constructor(private service: QuestionaireService) { }

  ngOnInit(): void {
    this.getQuestionaires();
  }

  getQuestionaires(): void {
    this.service.getQuestionaires()
    .subscribe(qs => {
      this.questionaires = qs;
    });
  }
}
