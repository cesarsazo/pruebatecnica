import { Component, OnInit } from '@angular/core';
import { ParametrosService } from '../../Servicios/parametros.service';

@Component({
  selector: 'app-configurar',
  templateUrl: './configurar.component.html',
  styleUrls: ['./configurar.component.css']
})
export class ConfigurarComponent implements OnInit {

  Csecuencias: number = this.service.getSecuencias();
  CminSecuencia: number = this.service.getminSecuencia();
  CmaxSecuencia: number = this.service.getmaxSecuencia();

  constructor(private service: ParametrosService) { 
    this.Csecuencias = this.service.getSecuencias()
    this.CminSecuencia = this.service.getminSecuencia()
    this.CmaxSecuencia = this.service.getmaxSecuencia()
  }

  ngOnInit(): void { 
    this.Csecuencias = this.service.getSecuencias()
    this.CminSecuencia = this.service.getminSecuencia()
    this.CmaxSecuencia = this.service.getmaxSecuencia()
  }

  changeData(event: any) {
    event.preventDefault();
    const target = event.target;    
    const secuencias = target.querySelector('#secuencias').value
    const minsec = target.querySelector('#minsec').value
    const maxsec = target.querySelector('#maxsec').value
    try {
      this.service.setSecuencias(secuencias)
      this.service.setminSecuencia(minsec)
      this.service.setmaxSecuencia(maxsec)
    } catch (error) {
      alert(error)
    }    
  }
  
}
