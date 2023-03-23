import { Component, Input } from '@angular/core';
import { Planets } from '../classes/planets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {
  @Input() planet?:Planets
}
