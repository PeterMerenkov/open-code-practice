import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AppUser } from '../interface/app-user';
import { Questionaire } from '../interface/questionaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionaireService {
  private readonly apiUrl:string = 'http://localhost:8080/user'

  constructor(private http: HttpClient) { }

  getQuestionaires(): Observable<Questionaire[]>{
    return this.http.get<Questionaire[]>(`${this.apiUrl}`)
    /* .pipe(
      tap(console.log),
      catchError(this.handleError)
    ) */;
  }

  getQuestionaireById(id: number): Observable<Questionaire> {
    return this.http.get<Questionaire>(`${this.apiUrl}/${id}`);
  }

  sendAnswers(userId: number, qId: number, answers: number[]): Observable<number[]>{
    return this.http.post<number[]>(`${this.apiUrl}/${userId}/${qId}`, answers)/* 
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    ) */;
  }

  updateAnswers(userId: number, qId: number, answers: number[]): Observable<number[]>{
    return this.http.put<number[]>(`${this.apiUrl}/${userId}/${qId}`, answers)
    /* .pipe(
      tap(console.log),
      catchError(this.handleError)
    ) */;
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`Error status - ${error.status}`);
  }
}
