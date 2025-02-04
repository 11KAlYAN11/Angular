import { Component } from '@angular/core';
// src github & one note

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'promiseDemo';

  // Component properties to store promise data
  promiseData: string = '';
  promiseError: string = '';
  promiseStatus: string = '';

  constructor() {
    // Here in promises at a time once all data is transferred no in chunks like observables

    // Example 1: Handling promises with error handling and completion
    const promise1 = new Promise<string>((resolve, reject) => {
      // Simulating successful resolution
      setTimeout(() => {
        resolve('Promise1: Data received successfully');
      }, 1000);

      // Simulating an error condition after 2 seconds
      setTimeout(() => {
        reject('Promise1: Something went wrong!');
      }, 2000);
    });

    // Handle promise resolution and error gracefully
    promise1
      .then((data) => {
        this.promiseData = data; // for putting this data into HTML
        console.log(data); // This will run if promise resolves successfully
      })
      .catch((err) => {
        this.promiseError = err; // For putting this error msg into HTML
        console.error('Error from promise1:', err); // This will run if promise rejects
      })
      .finally(() => {
        this.promiseStatus = "Promise1 operation complete"; // for displaying into HTML
        console.log('Promise1 operation complete'); // This runs regardless of success or failure
      });

    // Example 2: Another promise example for demonstration
    const promise2 = new Promise<string>((resolve, reject) => {
      // Simulating successful resolution
      setTimeout(() => {
        resolve('Promise2: Data received successfully');
      }, 1500);

      // Simulating an error condition after 3 seconds
      setTimeout(() => {
        reject('Promise2: Something went wrong!');
      }, 3000);
    });

    // Handle promise resolution and error gracefully
    promise2
      .then((data) => {
        console.log(data); // This will run if promise resolves successfully
      })
      .catch((err) => {
        console.error('Error from promise2:', err); // This will run if promise rejects
      })
      .finally(() => {
        console.log('Promise2 operation complete'); // This runs regardless of success or failure
      });
  }
  /*
  2nd Half: Promises
What is a Promise?
	• A Promise is a JavaScript object used to handle asynchronous operations.
	• It represents a single operation that will either resolve (success) or reject (failure).
	• Unlike Observables, a Promise cannot be canceled and only returns one value.
Key Features of Promises:
✅ Executes only once and does not emit multiple values over time.
✅ Used for handling asynchronous operations, such as fetching API data.
✅ Handles success with .then() and errors with .catch().
✅ Always completes—either successfully or with an error.
Promise Lifecycle:
	1. Creation: We create a new Promise with resolve (for success) and reject (for errors).
	2. Execution: The promise runs an asynchronous task.
	3. Resolution: If the task succeeds, resolve() is called.
	4. Rejection: If an error occurs, reject() is called.
	5. Handling: .then() is used for success, .catch() for errors, and .finally() for cleanup.
Basic Example of a Promise

typescript
CopyEdit
const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved successfully!');
  }, 2000);
});
myPromise
  .then((data) => console.log(data))
  .catch((err) => console.error('Error:', err))
  .finally(() => console.log('Promise completed'));
Error Handling in Promises

typescript
CopyEdit
const errorPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    reject('Something went wrong in the promise!');
  }, 2000);
});
errorPromise
  .then((data) => console.log(data))
  .catch((err) => console.error('Error:', err))
  .finally(() => console.log('Operation complete'));

Differences Between Observables and Promises
Feature	Observables	Promises
Multiple Values	Yes (continuous data stream)	No (only one value)
Cancellation	Yes (unsubscribe)	No
Asynchronous Handling	Works with operators like map(), filter(), debounceTime()	Uses .then(), .catch(), .finally()
Error Handling	.error() inside subscription	.catch()
Use Case	Handling multiple asynchronous events over time (e.g., API calls, user events)	Handling a single asynchronous task (e.g., fetching data once)

When to Use Observables vs. Promises?
✅ Use Observables When:
	• You need to handle multiple values over time (e.g., user input, live data).
	• You want to cancel the operation when it's no longer needed.
	• You need advanced data transformations using RxJS operators.
✅ Use Promises When:
	• You only need one-time execution (e.g., fetching API data once).
	• You don’t need to handle multiple values over time.
	• You don’t require unsubscribe functionality.



  */
}
