import { AppUser } from "./app-user";

export interface Questionaire {
  id?: number;
  title: string;
  questions: Question[];
}

export interface Question {
  id?: number;
  text: string;
  rightAnswerIdx: number;
  answers: Answer[];
}

export interface Answer {
  id?: number;
  text: string;
  appUsers: AppUser[];
}