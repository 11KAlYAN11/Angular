import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Property for interpolation
  title: string = 'My Angular App';

  // Property for two-way binding
  userInput: string = '';

  // Method for event binding
  onButtonClick() {
    alert('Button clicked! User input: ' + this.userInput);
  }

  // Property Binding
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
}
