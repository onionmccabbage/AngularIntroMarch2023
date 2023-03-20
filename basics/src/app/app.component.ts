import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h3>Coffee Time</h3>'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // here are properties of this class
  // we model our data as class properties
  
  // ES has no notion of private, public
  // BUT we can control scope  
  title = 'basics';
  today = new Date()
  products = [
    {'name':'Pots', 'price':3.99},
    {'name':'Dots', 'price':5.99},
    {'name':'Spots', 'price':1.99}
  ]
  showFlag = true
  size:number = 24 // TypeScript
  imgUrl = 'https://placehold.co/64'
  // here are methods of this class
  handleChange(evt:any){ // revisit any type
    this.size = evt.target.value as number
    // back-tick syntax is WAAAY more efficient than string-building
    // this.imgUrl = "https://placehold.co/" + this.size // old-skool
    // NB data-binding is ONLY for templates (HTML)
    this.imgUrl = `https://placehold.co/${this.size}`
  }


  doStuff(evt:Event){ // :Event is TypeScript
    // in ES we use var, let or const to declare variables
    let event_origin = evt.target
    // the console is ALWAYS the browser consol
    console.log('button was clicked', event_origin)
    this.showFlag = !this.showFlag
    // we can mutate the data model
    this.title = 'changed by a button event handler'
  }



}
