import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordListService {
  words = [];

  addToList(word: any) {
    this.words.unshift(word);
  }

  removeFromList(id: any) {
    this.words = this.words.filter(item => item.id !== id);
  }

  constructor() { }
}
