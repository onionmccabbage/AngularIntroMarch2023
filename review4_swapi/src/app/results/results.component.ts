import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() resultInstance:any = {}
  show:boolean = true
  constructor() { }

  ngOnInit() {
  }

}
