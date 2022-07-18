import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, tap } from 'rxjs';
import { Questionaire } from '../interface/questionaire';
import { AuthService } from '../_services/auth.service';
import { QuestionaireService } from '../_services/questionaire.service';

@Component({
  selector: 'app-questionaire-page',
  templateUrl: './questionaire-page.component.html',
  styleUrls: ['./questionaire-page.component.scss']
})
export class QuestionairePageComponent implements OnInit {

  qForm = this.fb.group({
    qs: this.fb.array([])
  })
  id!: number;

  isSubmitted = false;

  questionaire: Questionaire = {
    title: '',
    questions: []
  };

  answers: number[] = [];

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private service: QuestionaireService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.id = Number(p.get('id')));
    this.service.getQuestionaireById(this.id).subscribe(q => {
      this.questionaire = q
      console.log(this.questionaire);
      this.answers.length = this.questionaire.questions.length;
  
      for (let i = 0; i < this.questionaire.questions.length; i++) {
        const q = this.questionaire.questions[i];
        console.log(i);
        (this.qForm.get('qs') as FormArray).controls.push(
          this.fb.group({
            answerIdx: this.fb.control('', Validators.required)
          })
        );
      }
    });
    
  }

  getQs() {
    return this.qForm.get('qs') as FormArray;
  }

  pushAnswer(i: number, answer: number) {
    this.answers[i] = answer;
  }

  //TODO: getUserId()
  sendAnswers() {
    this.service.sendAnswers(this.auth.getDecodedAccessToken(this.auth.getToken()).user_id, this.questionaire.id!, this.answers).subscribe({
      next: () => {
        console.log(this.id)
        this.router.navigate(['/leaderboard', this.id])
      },
      error: () => {
        console.log(this.id)
        this.router.navigate(['/leaderboard', this.id])
      }
    });
  }
}
