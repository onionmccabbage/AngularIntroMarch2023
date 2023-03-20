import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // properties of this class
  // @Input makes the property visible to the parent component
  @Input() incoming = ''
  @Output() customEvent = new EventEmitter()

  // methods of this class
  doStuff(){
    // emit the custom event
    this.customEvent.emit('some data')
  }

}
