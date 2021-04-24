import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecuenciaComponent } from './Componentes/secuencia/secuencia.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ConfigurarComponent } from './Componentes/configurar/configurar.component';

@NgModule({
  declarations: [
    AppComponent,
    SecuenciaComponent,
    FooterComponent,
    ConfigurarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
