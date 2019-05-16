import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuInicoComponent } from './menu-inico/menu-inico.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AgenteComponent } from './agente/agente.component';
import { CitasComponent } from './citas/citas.component';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { TipDocsComponent } from './tip-docs/tip-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuInicoComponent,
    ClienteComponent,
    AgenteComponent,
    CitasComponent,
    InmuebleComponent,
    TipDocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
