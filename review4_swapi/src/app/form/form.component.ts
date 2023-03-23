import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() choices:any = [{'option':'people'}]
  @Output() userValues:EventEmitter<object> = new EventEmitter()
  // models
  params:any = {'choice':'people', 'number':'1'}

  ngOnInit() {
    this.params.choice     = localStorage.getItem('choice') ? localStorage.getItem('choice') : 'people'
    this.params['number']  = localStorage.getItem('number') ? localStorage.getItem('number') : '1'
  }
  onSubmit(){
    this.userValues.emit(this.params)
  }

}
