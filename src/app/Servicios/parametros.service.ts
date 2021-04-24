import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  secuencias: number = 5;
  minSecuencia: number = 1;
  maxSecuencia: number = 9;

  constructor() { 
    this.secuencias = 5
    this.minSecuencia = 1
    this.maxSecuencia = 9
  }

  getSecuencias(): number{
    return this.secuencias;
  }

  setSecuencias(value: number){
    this.secuencias = value;
  }

  getminSecuencia(): number{
    return this.minSecuencia
  }

  setminSecuencia(value: number){
    this.minSecuencia = value;
  }

  getmaxSecuencia(): number{
    return this.maxSecuencia;
  }

  setmaxSecuencia(value: number){
    this.maxSecuencia = value;
  }

}
