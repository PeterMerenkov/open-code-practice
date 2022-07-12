import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questionaire } from 'src/app/interface/questionaire';
import { QuestionaireService } from 'src/app/_services/questionaire.service';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss']
})
export class QuestionaireComponent implements OnInit {

  @Input() title: string = '';
  @Input() id: number = -1;

  constructor(
    private service: QuestionaireService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onClick(id: number) {
    this.service.getQuestionaireById(id);
    this.router.navigate(['/questionaire', id]);
  }

}
