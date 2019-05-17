import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importando componentes
import { InmuebleComponent } from './inmueble/inmueble.component';
const routes: Routes = [
  {
    path:'inmuebles',
    component:InmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
