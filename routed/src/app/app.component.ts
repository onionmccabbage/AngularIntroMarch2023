import { Component, OnInit } from '@angular/core';
import { authGuard } from './auth/authGuard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routed';
  securityStatus = authGuard


  ngOnInit(){
    // make a call to the service that will load
  }

}

