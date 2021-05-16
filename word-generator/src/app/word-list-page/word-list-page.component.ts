import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WordListService } from '../word-list.service';

@Component({
  selector: 'app-word-list-page',
  templateUrl: './word-list-page.component.html',
  styleUrls: ['./word-list-page.component.css']
})
export class WordListPageComponent implements OnInit {
  words = [
    {id:1, value:"cat"},
    {id:2, value:"dog"},
    {id:3, value:"mouse"}
  ];
  inputControl = new FormControl();
/*
  remove(id) {
    this.words = this.words.filter(item => item.id !== id);
  }

  addNew() {
    this.words.unshift({id: this.words.length+1, value: this.inputControl.value});
    this.inputControl.reset();
  }*/

  addToList() {
    this.wordListService.addToList({id: this.words.length+1, value: this.inputControl.value});
    this.inputControl.reset();
  }

  removeFromList(word: any) {
    this.wordListService.removeFromList(word);
  }

  constructor(
    private route: ActivatedRoute,
    private wordListService: WordListService
  ) {
    wordListService.words$.subscribe((newWords) => {
      this.words = newWords;
    });
  }

  ngOnInit(): void {
  }

}
