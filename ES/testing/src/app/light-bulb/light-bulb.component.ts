import { Component } from '@angular/core';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.css']
})
export class LightBulbComponent {
  isOn:boolean = false
  clicked(){
    this.isOn = !this.isOn
  }
  get message(){ // ES classes can have get and set methods (accessor/mutator methods)
    return `The light is ${this.isOn ? 'On': 'Off'}` // ternary operator
  }
}
