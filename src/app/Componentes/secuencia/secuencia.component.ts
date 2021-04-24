import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier'; 

@Component({
  selector: 'app-secuencia',
  templateUrl: './secuencia.component.html',
  styleUrls: ['./secuencia.component.css']
})
export class SecuenciaComponent implements OnInit {

  private readonly notifier: NotifierService;

  id: any
  porcentaje: number;
  donePercent: number = 90;
  contador: number = 1;
  contadorSec: number = 1;
  buenas: number = 0
  showTable: string = "none"
  showResult: string = "block"

  numero1: any
  numero4: any
  numero7: any

  disabled1: boolean = true
  disabled4: boolean = true
  disabled7: boolean = true
  disabledBtn: boolean = false

  constructor( notifierService: NotifierService ) { 
    this.porcentaje = 0;
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  iniciar(){
    this.disabledBtn = true
    this.nuevaSecuencia();
    this.id = setInterval(() => {
      this.timeBySec(); 
    },1000);
    if (this.contadorSec == 1) {
      this.showTable = 'block'
      this.showResult = 'none'
      this.porcentaje = 0
    }
  }

  timeBySec(){
    
    this.contador = this.contador + 1

    this.donePercent = Math.floor( (this.contadorSec * 100) / 5 )

    if (this.contador > 10) {
      this.contadorSec = this.contadorSec + 1
      this.AllDisable()      
      if (this.contadorSec >  +localStorage.getItem('Csecuencias')) {
        this.notify('warning', 'Terminaron las secuencias')
        this.contadorSec = 1
        this.AllDisable()        
        this.donePercent = 0
        this.porcentaje = Math.floor( (this.buenas * 100) / +localStorage.getItem('Csecuencias') )
        this.buenas = 0
        this.SwitchTable()
        return
      }
      this.iniciar()
    }
  }

  getNumInicio() {    
    return Math.floor( ( Math.random() * ((+localStorage.getItem('CmaxSec')) - (+localStorage.getItem('CminSec')) ) + (+localStorage.getItem('CminSec')) ) )
  }

  getPosition(){
    return Math.floor( ( Math.random() * ( 3 - 1 ) + 1 ) )
  }

  AllDisable(){
    for (let j = 1; j < 8; j++) {      
      (<HTMLInputElement>document.getElementById(j.toString())).value = ''
    }
    this.disabled1 = true;
    this.disabled4 = true;
    this.disabled7 = true;
    clearInterval(this.id)
    this.contador = 1
    this.disabledBtn = false
  }

  nuevaSecuencia(){
    let minimo = this.getNumInicio()
    let posH = this.getPosition()
    this.Habilitar(posH)        
    var i: number = 1
    for (let j = minimo; j < minimo + 7; j++) {
      if (posH == 1 && i == 1) { i = i + 1; continue; } 
      else if (posH == 2 && i == 4) { i = i + 1; continue; } 
      else if (posH == 3 && i == 7) { continue; }
      (<HTMLInputElement>document.getElementById(i.toString())).value = j.toString()
      i = i + 1
    }
  }

  Habilitar(posH: number){
    if (posH == 1) {
      this.disabled1 = false
    } else if(posH == 2){
      this.disabled4 = false
    } else if(posH == 3){
      this.disabled7 = false
    }
  }

  responder(){
    let val1;
    let val2;
    for (let j = 7; j > 0; j--) {
      val1 = (<HTMLInputElement>document.getElementById(j.toString())).value      
      if (j > 1) {
        val2 = (<HTMLInputElement>document.getElementById((j-1).toString())).value        
        if ((val1 - val2) != 1) {
          this.notify('warning', 'Respuesta incorrecta!')          
          return
        }
      }      
    }
    this.buenas = this.buenas + 1
    this.notify('success', 'Respuesta correcta!')
  }

  notify(type, message) {
    this.notifier.notify( type, message );
  }

  SwitchTable(){
    if (this.showTable == 'block') {
      this.showTable = 'none'
      this.showResult = 'block'
    }else{
      this.showTable = 'block'
      this.showResult = 'none'
    }
  }

}
