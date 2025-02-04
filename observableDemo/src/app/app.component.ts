import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
// src github & one note

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ObservableDemo';
  observableData: string = '';
  observableError: string = '';
  observableStatus: string = '';

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
      next: (data) => {
        this.observableData += data; //cuz: chucks of data adding again & again     To display in HTMl page
        console.log(data);
      },
      error: (err) => {
        // Handle the error emitted from observable
        this.observableError = err; // To display in HTMl page
        console.error('Error from observable:', err);
      },
      complete: () => {
        // Notify when the observable completes normally
        this.observableStatus = "Observable completed";
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
  /*
  Understanding Observables and Promises in Angular
1st Half: Observables
What is an Observable?
	• An Observable is a powerful way to handle asynchronous data streams in Angular.
	• It allows data to be emitted over time, making it useful for handling events, API calls, and real-time updates.
	• Observables are provided by RxJS (Reactive Extensions for JavaScript), which Angular uses extensively.
Key Features of Observables:
✅ Supports multiple values over time (continuous data flow).
✅ Works asynchronously, making it useful for handling real-time data streams.
✅ Provides operators like map(), filter(), and debounceTime() for transforming data efficiently.
✅ Can be canceled (unsubscribed) when not needed, preventing memory leaks.
✅ Handles errors using .error() and completion using .complete().
Observable Lifecycle:
	1. Creation: We create an observable that emits values using the new Observable() constructor.
	2. Subscription: We subscribe to it to receive and handle emitted values.
	3. Emitting Data: The observable sends values using next().
	4. Handling Errors: If an error occurs, the observable calls error().
	5. Completion: When all data is emitted, the observable calls complete().
Basic Example of an Observable

typescript
CopyEdit
const myObservable = new Observable<string>((subscriber) => {
  subscriber.next('First Value');
  subscriber.next('Second Value');
  setTimeout(() => {
    subscriber.next('Third Value after delay');
    subscriber.complete(); // No more data will be emitted after this
  }, 2000);
});
Subscribing to an Observable

typescript
CopyEdit
myObservable.subscribe({
  next: (data) => console.log('Received:', data),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Observable Completed')
});
Error Handling in Observables

typescript
CopyEdit
const errorObservable = new Observable<string>((subscriber) => {
  subscriber.next('Everything is good!');
  subscriber.error('Oops! Something went wrong.');
});
errorObservable.subscribe({
  next: (data) => console.log('Received:', data),
  error: (err) => console.error('Error:', err),
  complete: () => console.log('Completed')
});
💡 Best Practice: Always unsubscribe when the observable is no longer needed to free up resources.


  */
}
