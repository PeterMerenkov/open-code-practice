import { Component, Input, OnInit } from '@angular/core';
import { Questionaire } from 'src/app/interface/questionaire';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss']
})
export class QuestionaireComponent implements OnInit {

  @Input() title: string = '';
  @Input() id: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

}
