import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WordListService {
  words = [];
  inputControl = new FormControl();

  addToList(word: any) {
    this.words.unshift({id: this.words.length+1, value: this.inputControl.value});
    this.inputControl.reset();
  }

  removeFromList(id: any) {
    this.words = this.words.filter(item => item.id !== id);
  }

  constructor() { }
}
