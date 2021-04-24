import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier'; 

@Component({
  selector: 'app-configurar',
  templateUrl: './configurar.component.html',
  styleUrls: ['./configurar.component.css']
})
export class ConfigurarComponent implements OnInit {

  private readonly notifier: NotifierService;

  Csecuencias: number = +localStorage.getItem('Csecuencias');
  CminSecuencia: number = +localStorage.getItem('CminSec');
  CmaxSecuencia: number = +localStorage.getItem('CmaxSec');

  constructor( notifierService: NotifierService ) { this.notifier = notifierService; }

  ngOnInit(): void { }

  changeData(event: any) {
    event.preventDefault();
    const target = event.target;    
    const secuencias = target.querySelector('#secuencias').value
    const minsec = target.querySelector('#minsec').value
    const maxsec = target.querySelector('#maxsec').value
    try {
      localStorage.setItem('Csecuencias', secuencias);
      localStorage.setItem('CminSec', minsec);
      localStorage.setItem('CmaxSec', maxsec);
      this.notify('success', 'Parametros actualizados!')
    } catch (error) {
      alert(error)
    }    
  }

  notify(type, message) {
    this.notifier.notify( type, message );
  }
  
}
