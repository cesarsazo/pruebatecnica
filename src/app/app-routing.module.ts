import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurarComponent } from './Componentes/configurar/configurar.component';
import { SecuenciaComponent } from './Componentes/secuencia/secuencia.component';

const routes: Routes = [
  {
    path: "",
    component: SecuenciaComponent
  },
  {
    path: "configurar",
    component: ConfigurarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
