import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionaireService } from 'src/app/_services/questionaire.service';

@Component({
  selector: 'app-admin-questionaire',
  templateUrl: './admin-questionaire.component.html',
  styleUrls: ['./admin-questionaire.component.scss']
})
export class AdminQuestionaireComponent implements OnInit {

  @Input() title: string = '';
  @Input() id: any;

  constructor(
    private service: QuestionaireService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onClick(id: number) {
    this.service.deleteQuestionnaireById(id).subscribe();
  }

}
