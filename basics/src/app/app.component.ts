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
  imgUrl = 'https://placehold.co/120x64'
  // here are methods of this class
  doStuff(){
    console.log('button was clicked')
  }



}
