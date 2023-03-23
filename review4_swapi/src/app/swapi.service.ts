import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http:HttpClient) { }
  
  // service properties
  uri:string = 'https://swapi.dev/api/'

  // getSwapi:Promise<any>
  getSwapi = (params:any)=>{
      return this.http.get(`${this.uri}${params.choice}/${params.number}/`)
    }  

}
