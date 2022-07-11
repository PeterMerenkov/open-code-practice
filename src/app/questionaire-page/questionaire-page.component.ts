import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questionaire } from '../interface/questionaire';
import { QuestionaireService } from '../_services/questionaire.service';

@Component({
  selector: 'app-questionaire-page',
  templateUrl: './questionaire-page.component.html',
  styleUrls: ['./questionaire-page.component.scss']
})
export class QuestionairePageComponent implements OnInit {

  questionaire: Questionaire = {
    id: 0,
    title: '',
    questions: []
  };

  answers: number[] = [];

  constructor(
      private route: ActivatedRoute,
      private service: QuestionaireService
    ) { }

  ngOnInit(): void {
    this.answers.length = this.questionaire.questions.length;
    this.route.paramMap.subscribe( p => this.service.getQuestionaireById(Number(p.get('id'))).subscribe(
      q => this.questionaire = q
    ))
  }

  pushAnswer(i: number, answer: number) {
    this.answers[i] = answer;
  }

  sendAnswers(userId: number, qId: number, answers: number[]) {
    this.service.sendAnswers(userId, qId, answers).subscribe();
  }
}
