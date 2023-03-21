import { Component } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent {
  txtCityPlaceholder    = 'Enter City Name'
  txtCountryPlaceholder = 'Enter 2 or 3 letter country code'
  btnLabel     = 'Get Weather'
  countryCodes = ['bg', 'gb', 'fr', 'de', 'ei', 'es', 'it', 'usa', 'uae', 'aus', 'ru']
  city         = 'london'
  country      = 'gb'
  weatherData  = {
                    'weather':[{'description':''}], 
                    'main':{'temp':12}, 
                    'wind':{'speed':0, 'deg':0}
                  }
  
  constructor(private weather:WeatherService){}
  handleButtonClick(){
    // call the weather service
    this.weather.getWeather(this.city, this.country)
    // capture the returned data
      .subscribe(this.handleweatherData())
  }
  handleweatherData(){
    return (weatherResponse:any)=>{
      this.weatherData = weatherResponse
    }
  }
}
