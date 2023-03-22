import { Component } from '@angular/core';
import { TypicodeService } from '../typicode.service';

import { IUser } from '../types/Iuser'
import { ITodo } from '../types/Itodo';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  // properties
  categories = ['users', 'posts', 'albums', 'photos', 'todos']
  category = this.categories[0]
  category_id = 1
  // we can make a TS Interface for our model
  dataModel = {'name':'', 'thumbnailUrl':''}
  data_j    = ''
  // classes we may need
  singleUser?:IUser // class or interface
  singleTodo?:ITodo
  // methods
  constructor(private typicode:TypicodeService){}

  // every component has lifecycle events
  ngOnInit(){ // fires when the component is first rendered
    this.handleForm()
  }
  
  handleForm(){
    this.typicode.getData(this.category, this.category_id)
    .subscribe( this.handleReturnedData() )
  }
  
  handleReturnedData(){
    // might be worth clearing down previous data models
    return (received:any)=>{
      this.data_j = JSON.stringify(received)
      this.dataModel = received
      // try to populate an isntance of a model class
      if (this.category=='todos'){
        this.singleTodo = received
      } else if (this.category=='users'){
        this.singleUser = received
      }
    }
  }
}
