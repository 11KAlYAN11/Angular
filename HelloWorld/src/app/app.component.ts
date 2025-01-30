import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Bindings Demo Working Kalyan'; // This will be displayed in the template
  count = 10; // This will be displayed in the template

  // Property Binding
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  isButtonDisabled = false;

  // Two-Way Binding
  username = '';
}
