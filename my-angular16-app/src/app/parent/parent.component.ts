import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage: string = 'Hello from Parent Component!';
  messageFromChild: string = '';

  receiveMessage(message: string) {
    console.log('received Message called with message:', message);
    this.messageFromChild = message;
  }
}