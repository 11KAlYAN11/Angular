import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Interpolation: Displaying dynamic text in the template
  title: string = 'Welcome to Angular 16 Bindings Demo!';
  subtitle: string = 'Learn how to use Angular bindings effectively.';

  // Two-way Data Binding: Binding input fields to properties
  userInput: string = '';
  additionalInput: string = '';

  // Property Binding: Binding HTML attributes to component properties
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  buttonText: string = 'Click Me!';

  // Event Binding: Handling user interactions like button clicks
  onButtonClick() {
    alert('You clicked the button! User input: ' + this.userInput);
  }

  onAdditionalButtonClick() {
    alert('Additional button clicked! Input: ' + this.additionalInput);
  }

  // Class Binding: Dynamically applying CSS classes
  isSpecial: boolean = true;

  // Style Binding: Dynamically applying inline styles
  textColor: string = 'blue';
  fontSize: string = '20px';
}