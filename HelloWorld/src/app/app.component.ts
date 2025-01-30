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

   // Event Binding
   clickCount = 0;

   // Method for Event Binding
  onButtonClick() {
    this.clickCount++;
    console.log('Button clicked! Count:', this.clickCount);
  }

  // Method for Event Binding with Input
  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input changed:', inputElement.value);
  }
}
