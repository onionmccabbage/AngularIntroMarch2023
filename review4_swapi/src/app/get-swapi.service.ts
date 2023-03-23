import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
// in order to use Promises we need...
import 'rxjs/add/operator/toPromise'

@Injectable()
export class GetSwapiService {
  constructor(private http:Http){}
  getSwapiReport(category, num):Promise<any>{
    const swapiURL = `https://swapi.co/api/${category}/${num}/`
    console.log(category, num, swapiURL)
    return this.http.get(swapiURL)
               .toPromise()
               // .then(response=>response.json() as SwapiReport[])
               .then(response=>response.json())
               .catch(this.handleError)
  }
  // method to handle any http errors
  handleError(error:any):Promise<any>{
    console.error('an error occured', error)
    return Promise.reject(error.message || error)
  }
}
