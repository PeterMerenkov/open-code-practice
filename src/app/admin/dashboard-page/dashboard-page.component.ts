import { Component, OnInit } from '@angular/core';
import { Questionaire } from 'src/app/interface/questionaire';
import { QuestionaireService } from 'src/app/_services/questionaire.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  questionaires: Questionaire[] = [];

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
