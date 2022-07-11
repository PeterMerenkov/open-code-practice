import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/interface/questionaire';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() questionIdx!: number;
  @Input() question!: Question;

  @Output() newAnswerEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewAnswer(answer: number) {
    this.newAnswerEvent.emit(answer)
  }
}
