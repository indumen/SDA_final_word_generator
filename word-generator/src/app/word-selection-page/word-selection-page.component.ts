import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-selection-page',
  templateUrl: './word-selection-page.component.html',
  styleUrls: ['./word-selection-page.component.css']
})
export class WordSelectionPageComponent implements OnInit {

  name = 'Angular';
  verbList = ['karu', 'auto', 'kass', 'maja', 'meri'];
  verb = '';

  ngOnInit () {
    const wordWait = 2000;
    this.verb = this.verbList[Math.floor(Math.random() * this.verbList.length)];
    console.log(Math.random(), Math.floor(Math.random()), Math.floor(Math.random() * this.verbList.length));
    setTimeout(() => this.updateWord(), wordWait);
  }

  updateWord () {
    this.verb = this.verbList[Math.floor(Math.random() * this.verbList.length)];
    console.log('updateWord', this.verb);
  }
}
