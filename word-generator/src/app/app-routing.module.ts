import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordListPageComponent } from './word-list-page/word-list-page.component';
import { WordSelectionPageComponent } from './word-selection-page/word-selection-page.component';

const routes: Routes = [
  {
    path: '', component: WordSelectionPageComponent
  },
  {
    path: 'words', component: WordListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
