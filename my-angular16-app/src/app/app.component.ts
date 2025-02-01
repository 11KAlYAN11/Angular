import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Interpolation
  title: string = 'Angular Bindings Demo';
  subtitle: string = 'Learn Angular Bindings Easily!';

  // Two-way Data Binding
  userInput: string = '';
  isChecked: boolean = false;

  // Property Binding
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';

  // Event Binding
  onButtonClick() {
    alert('Button clicked! User input: ' + this.userInput);
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input changed:', inputElement.value);
  }
}