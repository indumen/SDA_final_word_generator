import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-word-selection-page',
  templateUrl: './word-selection-page.component.html',
  styleUrls: ['./word-selection-page.component.css']
})
export class WordSelectionPageComponent implements OnInit {
  wordNumber = new FormControl(0);
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

  generateWords() {
    let newWords = '';
    const howMany = Number(this.wordNumber.value);

    if (isNaN(howMany)) {
      // isNaN("asdasd") -> true, "this is not a number"
      // isNaN(123) -> false, "this is a number"
      alert('This is not a number');
      return; // stop this function
    }

    if (howMany > this.verbList.length) {
      alert('We do not have that many words');

      return;
    }

    const copyOfVerbs = [...this.verbList];

    for (let i = 0; i < howMany; i++) {
      const randomWordIndex = Math.floor(Math.random() * copyOfVerbs.length);
      const [ourNewVerb] = copyOfVerbs.splice(
        randomWordIndex, // kust me hakkame asju võtme arrays
        1, // mitu elementi me võtame
      );

      newWords += ' ' + ourNewVerb;
    }

    this.verb = newWords;
  }
}
