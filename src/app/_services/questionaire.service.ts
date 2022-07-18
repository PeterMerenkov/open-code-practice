import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AppUser } from '../interface/app-user';
import { Questionaire } from '../interface/questionaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionaireService {
  private readonly userApiUrl:string = 'http://localhost:8080/questionnaire'
  private readonly adminApiUrl:string = 'http://localhost:8080/admin'

  constructor(private http: HttpClient) { }

  getQuestionaires(): Observable<Questionaire[]>{
    return this.http.get<Questionaire[]>(`${this.userApiUrl}`)
    /* .pipe(
      tap(console.log),
      catchError(this.handleError)
    ) */;
  }

  getQuestionaireById(id: number): Observable<Questionaire> {
    return this.http.get<Questionaire>(`${this.userApiUrl}/${id}`);
  }

  createQuestionaire(q: Questionaire) {
    return this.http.post<Questionaire>(`${this.adminApiUrl}`, q)
  }

  sendAnswers(userId: number, qId: number, answers: number[]): Observable<number[]>{
    return this.http.post<number[]>(`${this.userApiUrl}/${userId}/${qId}`, answers)/* 
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    ) */;
  }

  updateAnswers(userId: number, qId: number, answers: number[]): Observable<number[]>{
    return this.http.put<number[]>(`${this.userApiUrl}/${userId}/${qId}`, answers)
    /* .pipe(
      tap(console.log),
      catchError(this.handleError)
    ) */;
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`Error status - ${error.status}`);
  }

  deleteQuestionnaireById(id: number) {
    return this.http.delete(`${this.adminApiUrl}/${id}`)
  }

  getLeaderboard(id: number) {
    return this.http.get<Questionaire>(`${this.userApiUrl}/leaderBoard/${id}`);
  }
}
