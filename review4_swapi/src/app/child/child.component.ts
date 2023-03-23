import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Http } from '@angular/http'
import { GetSwapiService } from '../get-swapi.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [GetSwapiService]
})
export class ChildComponent implements OnInit {

  @Input() category:string
  @Input() itemNum:string
  @Output() SWAPI_EVENT = new EventEmitter<Object>()

  swapiReport:object
  dataObject:object

  doEmitEvent() {
    this.dataObject = {status:'Received OK', timestamp:new Date()}
    this.SWAPI_EVENT.emit(this.dataObject);
  }

 constructor(private getSwapiService:GetSwapiService) { }

  getSwapiData(){
    this.getSwapiService.getSwapiReport(this.category, this.itemNum).then( 
      (swapiReport )=>{ 
        this.swapiReport=swapiReport 
        this.doEmitEvent()
      } )
  }


  ngOnInit() {
  }

}
