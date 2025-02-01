import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule // Here we need to add that FormsModule after importing is done else error
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
