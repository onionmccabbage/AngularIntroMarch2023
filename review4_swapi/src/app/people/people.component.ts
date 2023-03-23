import { Component, Input } from '@angular/core';
import { People } from '../classes/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person?:People
}
