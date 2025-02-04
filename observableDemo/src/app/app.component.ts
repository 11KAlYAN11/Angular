import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observableDemo';

  constructor() {
    // Create an observable that emits data
    const observable = new Observable<string>((subscriber: Subscriber<string>) => {
      // Simulate emitting data
      subscriber.next('Hello from Observable!');
      subscriber.next('Another message from observable');
      
      // Simulate an error condition after emitting some data
      setTimeout(() => {
        subscriber.error('Something went wrong in Observable!');
      }, 2000);

      // Observable completed normally
      subscriber.complete();
    });

    const observable1 = new Observable<string>((subscriber1: Subscriber<string>) => {
      // Simulate emitting data
      subscriber1.next('Hello Kalyan, this message is from observable1');
      subscriber1.next('Another message from Observer1');
      
      // Simulate an error condition
      setTimeout(() => {
        subscriber1.error('An error occurred in Observable1');
      }, 3000);

      // Observable completed normally
      subscriber1.complete();
    });

    // Subscribe to the first observable and handle the emitted messages
    observable.subscribe({
      next: (data) => console.log(data),
      error: (err) => {
        // Handle the error emitted from observable
        console.error('Error from observable:', err);
      },
      complete: () => {
        // Notify when the observable completes normally
        console.log('Observable completed');
      }
    });

    // Subscribe to the second observable and handle the emitted messages
    observable1.subscribe({
      next: (data) => console.log(data),
      error: (err) => {
        // Handle the error emitted from observable1
        console.error('Error from observable1:', err);
      },
      complete: () => {
        // Notify when the observable1 completes normally
        console.log('Observable1 completed');
      }
    });
  }
}
