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

  title1: string = "This is angular Demo from asam";

  // Two-way Data Binding
  userInput: string = '';
  isChecked: boolean = false;

  userInput1: string = '';
  

  // Property Binding
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  imageUrl1: string = 'https://th.bing.com/th?id=ORMS.b7e5adc39ceec81057341896e7a71d4a&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0';

  // Event Binding
  onButtonClick() {
    alert('Button clicked! User input: ' + this.userInput);
  }
  onButtonClick1() {
    alert('Heyyy! Button was clicked 😋😊');
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log('Input changed:', inputElement.value);
  }
}