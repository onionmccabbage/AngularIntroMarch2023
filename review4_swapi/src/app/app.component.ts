import { Component } from '@angular/core';
import { People } from './classes/people';
import { Planets } from './classes/planets';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private swapi:SwapiService){}
  // models
  results:any = {}
  resultInstance?:People | Planets
  choices = [
              {option:'people'},
              {option:'planets'},
              {option:'starships'},
              {option:'species'},
              {option:'vehicles'},
              {option:'films'},
            ]
  userPrefs = {'choice':'', 'number':''}

  // event call-back listeners
  handleValues(e:any){
    console.log(e)
    this.userPrefs['choice'] = e.choice
    this.userPrefs['number'] = e.number
    // store these values in localStorage (text-only)
    localStorage.setItem('choice', this.userPrefs['choice'])
    localStorage.setItem('number', this.userPrefs['number'])

    // make a call to the swapi service
    this.swapi.getSwapi(this.userPrefs)
      .subscribe(this.makeInstance())
  }
  makeInstance(){
    return (swapiResponse:any)=>{
      this.results = swapiResponse
      const option = this.userPrefs['choice']
      switch (option){ 
        case ('people'):
          this.resultInstance = 
            new People(this.results['name'], 
                      this.results['height'], 
                      this.results['eye_color'])
          break
        case ('planets'):
          this.resultInstance = 
            new Planets(this.results['name'], 
                        this.results['rotation-period'], 
                        this.results['population'])
          break
        default:
          this.resultInstance = swapiResponse
      }
    }
  }
}
