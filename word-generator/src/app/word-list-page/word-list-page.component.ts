import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  remove(id) {
    this.words = this.words.filter(item => item.id !== id);
  }

  addNew() {
    this.words.unshift({id: this.words.length+1, value: this.inputControl.value});
    this.inputControl.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
