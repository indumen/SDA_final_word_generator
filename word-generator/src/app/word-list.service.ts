import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordListService {
  wordsSubject = new BehaviorSubject<Array<{id: number, value: string}>>([]);
  words$ = this.wordsSubject.asObservable();

  addToList(word: any) {
    const newWords = [...this.wordsSubject.getValue(), word];

    this.wordsSubject.next(newWords);
    //this.words.unshift(word);
  }

  removeFromList(id: any) {
    const newWords = this.wordsSubject.getValue().filter(item => item.id !== id);
    this.wordsSubject.next(newWords);
  }

  constructor() { }
}
