import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  weatherStub  = `http://api.openweathermap.org/data/2.5/weather?q=`
  weatherAPPID = '&APPID=48f2d5e18b0d2bc50519b58cce6409f1'

  getWeather(_city:string, _country:string){
    const url = `${this.weatherStub}${_city},${_country}${this.weatherAPPID}`
    return this.http.get(url)
  }

}
