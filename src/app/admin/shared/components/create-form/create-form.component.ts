import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interface/questionaire';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  @Input() questionIdx!: number;
  @Input() question: Question = {
    id: -1,
    text: 'test',
    rightAnswerIdx: -1,
    answers: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
