import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    localStorage.setItem('Csecuencias', '5');
    localStorage.setItem('CminSec', '1');
    localStorage.setItem('CmaxSec', '9');
   }

}
