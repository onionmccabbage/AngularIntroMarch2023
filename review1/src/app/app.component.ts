import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fbName = 'billgates'
  fbUrl = 'https://graph.facebook.com/billgates/picture?type=normal'
  updateName(evt:any){
    this.fbName = evt.target.value
    this.fbUrl = `https://graph.facebook.com/${this.fbName}/picture?type=normal`
  }
  outerHandler(evt:any){
    let received = evt
    console.log(`A custom event was received ${received}`)
  }
}
