import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = QUIZ_LIST;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);

  constructor() {
  }

  addQuiz(quiz: Quiz) {
    QUIZ_LIST.push(quiz)
    this.quizzes$.next(QUIZ_LIST)
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }
  deleteQuiz(quiz : Quiz){
    QUIZ_LIST.splice(this.quizzes.indexOf(quiz),1);
    this.quizzes$.next(QUIZ_LIST)
  }
}
