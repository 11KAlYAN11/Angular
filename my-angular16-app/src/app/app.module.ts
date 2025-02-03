import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component'; // Import the child component

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent // Declare the child component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ChildComponent] // Bootstrap the child component directly
})
export class AppModule { }
