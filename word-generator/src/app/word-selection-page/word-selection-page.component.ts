import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WordListService } from '../word-list.service';

@Component({
  selector: 'app-word-selection-page',
  templateUrl: './word-selection-page.component.html',
  styleUrls: ['./word-selection-page.component.css']
})
export class WordSelectionPageComponent implements OnInit {
  wordNumber = new FormControl(0);
  name = 'Angular';
  verbList = [];
  verb = '';

  ngOnInit () {
  }

  constructor(
    private wordListService: WordListService
  ) {
    wordListService.words$.subscribe((newWords) => {
      this.verbList = newWords;
    });
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
