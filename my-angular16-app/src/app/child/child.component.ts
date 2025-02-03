import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  title = 'Child Component';
  name: string = '';

  @Input() parentData: string = ''; // Add this line to receive data from the parent
}