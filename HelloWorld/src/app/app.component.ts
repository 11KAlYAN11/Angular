// All Logic will come into app.componenet.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // If any values passed from here will be displayed in mentioned templateURL
  styleUrl: './app.component.css' // mentioned .css styles will be considered
})
export class AppComponent {
  title = 'HelloWorld';
}
