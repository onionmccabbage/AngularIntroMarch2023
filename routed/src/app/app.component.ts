import { Component } from '@angular/core';
import { authGuard } from './auth/authGuard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routed';
  securityStatus = authGuard
}
