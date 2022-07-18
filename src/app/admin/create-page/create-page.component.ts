import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Answer, Question, Questionaire } from 'src/app/interface/questionaire';
import { QuestionaireService } from 'src/app/_services/questionaire.service';
import { ValidationService } from 'src/app/_services/validation.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  questionnaire!: Questionaire;
  question!: Question;
  answer!: Answer;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: QuestionaireService,
    private val: ValidationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      questions: new FormArray(
        [
          this.fb.group({
            qText: this.fb.control('', Validators.required),
            rightAnswerIdx: this.fb.control('', Validators.required),
            answers: this.fb.array(
              [
                this.fb.control('', Validators.required),
                this.fb.control('', Validators.required)
              ], 
              [Validators.required, this.val.minLengthArray(2)]
            )
          })
        ], 
        Validators.required
      )
    })
    console.log(this.questions.controls);
    
  }

  createQuestionnaire() {
    this.questionnaire = {
      title: this.form.get('title')?.value,
      questions: []
    }
    for (let i = 0; i < this.questions.controls.length; i++) {
      const questionForm = this.questions.controls[i];

      this.question = {
        text: questionForm.value.qText,
        rightAnswerIdx: questionForm.value.rightAnswerIdx,
        answers: []
      }
      
      for (let j = 0; j < this.getAnswers(i).controls.length; j++) {
        const answerForm = this.getAnswers(i).controls[j];
        
        this.answer = {
          text: answerForm.value,
          appUsers: []
        }

        this.question.answers.push(this.answer)
      }
      this.questionnaire.questions.push(this.question)
    }
    console.log(this.questionnaire)
    this.service.createQuestionaire(this.questionnaire).subscribe(() =>
      this.router.navigateByUrl('/admin/dashboard')
    );

    
  }

  deleteQuestion(i: number) {
    this.questions.removeAt(i)
  }

  deleteAnswer(i: number, j: number) {
    this.getAnswers(i).removeAt(j)
  }

  getAnswers(i: number) {
    return (this.questions.controls[i].get('answers') as FormArray)
  }

  getQuestionText(i: number): FormControl {
    // console.log(this.getQuestionText(i).errors);
    
    return this.questions.controls[i].get('qText') as FormControl
  }

  getAnswersControls(i: number) {
    return this.getAnswers(i).controls;
  }

  getAnswer(i: number, j: number) {
    return this.getAnswersControls(i)[j] as FormControl;
  }

  getRightAnswerRadio(i: number) {
    return this.questions.controls[i].get('rightAnswerIdx') as FormControl
  }

  addQuestion() {
    this.questions.push(
      this.fb.group({
      qText: this.fb.control('', Validators.required),
      rightAnswerIdx: this.fb.control('', Validators.required),
      answers: this.fb.array(
        [
          this.fb.control('', Validators.required),
          this.fb.control('', Validators.required)
        ], 
        [Validators.required, this.val.minLengthArray(2)]
      )
    }))
  }

  addAnswer(i: number) {
    console.log(i);
    this.getAnswers(i).push(
      this.fb.control('', Validators.required)
    )
  }

  get title(): FormControl {
    return this.form.get('title') as FormControl
  }

  get questions() {
    return this.form.get('questions') as FormArray
  }

  log(a: any) {
    console.log(a);
  }
}
