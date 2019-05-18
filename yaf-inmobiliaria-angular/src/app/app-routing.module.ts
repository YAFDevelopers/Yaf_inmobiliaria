import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import { CitasComponent } from './citas/citas.component'; 

const routes: Routes = [
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
