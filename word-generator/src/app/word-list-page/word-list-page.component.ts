import { Component, OnInit } from '@angular/core';

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
  ]

  remove(id) {
    this.words = this.words.filter(item => item.id !== id);
  }
  addNew() {
    //this.words.unshift({id: 4, value: "Test"});
    //console.log(this.words);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
