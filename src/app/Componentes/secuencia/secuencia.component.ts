import { Component, OnInit } from '@angular/core';
import { ParametrosService } from 'src/app/Servicios/parametros.service';

@Component({
  selector: 'app-secuencia',
  templateUrl: './secuencia.component.html',
  styleUrls: ['./secuencia.component.css']
})
export class SecuenciaComponent implements OnInit {

  id: any
  porcentaje: number;
  contador: number = 1;

  numero1: any
  numero4: any
  numero7: any

  disabled1: boolean = true
  disabled4: boolean = true
  disabled7: boolean = true

  constructor(private service: ParametrosService) { 
    this.porcentaje = 0;
  }

  ngOnInit(): void {    
  }

  iniciar(){
    this.id = setInterval(() => {
      this.timeBySec(); 
    },1000);
  }

  timeBySec(){
    console.log(this.contador)    
    this.contador = this.contador + 1
    if (this.contador > 10) {
      this.disabled1 = false;
      let id = (<HTMLInputElement>document.getElementById('7')).value      
      alert(id)
      clearInterval(this.id)      
    }
  }  
}
