import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordListPageComponent } from './word-list-page/word-list-page.component';
import { WordSelectionPageComponent } from './word-selection-page/word-selection-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WordListPageComponent,
    WordSelectionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
