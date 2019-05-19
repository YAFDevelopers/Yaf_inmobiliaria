import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import { CitasComponent } from './citas/citas.component'; 

import { InmuebleComponent } from './inmueble/inmueble.component';
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

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
