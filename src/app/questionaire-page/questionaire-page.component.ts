import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe, tap } from 'rxjs';
import { Questionaire } from '../interface/questionaire';
import { QuestionaireService } from '../_services/questionaire.service';

@Component({
  selector: 'app-questionaire-page',
  templateUrl: './questionaire-page.component.html',
  styleUrls: ['./questionaire-page.component.scss']
})
export class QuestionairePageComponent implements OnInit {

  id!: number;

  questionaire: Questionaire = {
    id: 0,
    title: 'test',
    questions: []
  };

  answers: number[] = [];

  constructor(
      private route: ActivatedRoute,
      private service: QuestionaireService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.id = Number(p.get('id')));
    this.service.getQuestionaireById(this.id).subscribe(q => this.questionaire = q);
    this.answers.length = this.questionaire.questions.length;
  }

  pushAnswer(i: number, answer: number) {
    this.answers[i] = answer;
  }

  sendAnswers(userId: number, qId: number, answers: number[]) {
    this.service.sendAnswers(userId, qId, answers).subscribe();
  }
}
