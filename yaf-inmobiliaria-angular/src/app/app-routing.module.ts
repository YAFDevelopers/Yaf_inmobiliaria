import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import { CitasComponent } from './citas/citas.component'; 
import { InmuebleComponent } from './inmueble/inmueble.component';
import {AyudaComponent} from './ayuda/ayuda.component';
import{AgenteComponent} from './agente/agente.component';
import {ClienteComponent} from './cliente/cliente.component';
import {InformesComponent} from './informes/informes.component'; 

const routes: Routes = [
  {
    path:'inmuebles',
    component:InmuebleComponent
  },
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
    },
    {
      path:'cliente',
      component:ClienteComponent
    },
    {
      path:'informes',
      component:InformesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
