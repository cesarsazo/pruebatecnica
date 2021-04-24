import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebatecnica';
  private readonly notifier: NotifierService;

  constructor( notifierService: NotifierService ) {
    this.notifier = notifierService;
  }

  notify(type, message) {
    this.notifier.notify( type, message );
  }

}
