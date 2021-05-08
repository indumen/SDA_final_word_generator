import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-list-page',
  templateUrl: './word-list-page.component.html',
  styleUrls: ['./word-list-page.component.css']
})
export class WordListPageComponent implements OnInit {
  words = ["cat", "dog", "person"]

  Delete() {
    window.alert('The product has been deleted!');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
