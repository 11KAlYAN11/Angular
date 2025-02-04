import { Component } from '@angular/core';

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
}
