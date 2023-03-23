import { Component, OnInit, Input, Output } from '@angular/core';
import { People } from '../classes/people';
import { Planets } from '../classes/planets';
import { Swapi } from '../classes/swapi';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() resultInstance?:any
  show:boolean = true
  constructor() { }

  ngOnInit() {
  }

}
