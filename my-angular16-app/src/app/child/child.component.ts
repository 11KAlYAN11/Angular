import { Component } from '@angular/core';


@Component({
  selector: 'app-child', // This same name we need to mention in index.html so that it will come to here directly & select respective files
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  title = 'Child Component';
  name: string = '';
}
