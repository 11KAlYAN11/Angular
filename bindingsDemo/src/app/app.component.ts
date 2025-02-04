import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bindingsPractice';
  // Interpolation
  name: string = "Hello Kalyan welcome to bindings demo";

  // Property binding like binary data img, video etc..
  imageUrl: string = 'https://th.bing.com/th?id=ORMS.b7e5adc39ceec81057341896e7a71d4a&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0';

  // Event Binding UI to Component Like when some action occured in UI will do smtg in component as name suggests
  onButtonClick() {
    alert("Wow... you pressed button 😎😎😋😋");
  }

  // 2 way binding UI <--> Component
  description: string = '';
}
