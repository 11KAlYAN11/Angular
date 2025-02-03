import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  title = 'Child Component';
  name: string = '';

  @Input() parentData: string = ''; // Receive data from the parent

  @Output() childEvent = new EventEmitter<string>(); // Create an EventEmitter

  sendToParent() {
    console.log('sendToParent called');
    this.childEvent.emit('Message from Child Component');
  }
}