import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import { CitasComponent } from './citas/citas.component'; 
import {AyudaComponent} from './ayuda/ayuda.component';
import{AgenteComponent} from './agente/agente.component';
const routes: Routes = [
  {
    path:'', 
    component:InicioComponent
  },
    {
      path:'citas',
      component:CitasComponent
    },
    {
      path:'ayuda',
      component:AyudaComponent
    },
    {
      path:'agente',
      component:AgenteComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
