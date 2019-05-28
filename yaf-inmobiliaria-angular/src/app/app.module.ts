import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modulos para conectar el servicio
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms'
import {ServicioYafService} from './servicio-yaf.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuInicoComponent } from './menu-inico/menu-inico.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AgenteComponent } from './agente/agente.component';
import { CitasComponent } from './citas/citas.component';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { TipDocsComponent } from './tip-docs/tip-docs.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { InformesComponent } from './informes/informes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuInicoComponent,
    ClienteComponent,
    AgenteComponent,
    CitasComponent,
    InmuebleComponent,
    TipDocsComponent,
    InicioComponent,
    FooterComponent,
    AyudaComponent,
    InformesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServicioYafService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
