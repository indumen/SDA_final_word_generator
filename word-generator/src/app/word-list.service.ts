import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordListService {
  words = [];

  addToList(word: any) {
    this.words.push(word);
  }

  getItems() {
    return this.words;
  }

  clearList() {
    this.words = [];
    return this.words;
  }

  constructor() { }
}
