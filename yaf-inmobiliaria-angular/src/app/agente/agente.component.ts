import { Component, OnInit } from '@angular/core';
import {ServicioYafService} from '../servicio-yaf.service';
import { puts } from 'util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-agente',
  templateUrl: './agente.component.html',
  styleUrls: ['./agente.component.css']
})
export class AgenteComponent implements OnInit {

  agente: any=[];
  idbuscar:string;
  TipodeDocumento: any=[];

  buscaragente ={
    Contrasena_Agentes: "",
    Correo_Agentes: "",
    Estado_Agentes: "",
    FechaNacimiento_Agentes: "",
    FechaRegistro_Agentes: "",
    IdAgente_Agentes: 0,
    IdTipoDocumento_Agentes: 0,
    NumeroDocumento_Agentes: "",
    NumeroTelfono_Agentes: "",
    PrimerApellido_Agentes: "",
    PrimerNombre_Agentes: "",
    SegundoApellido_Agentes: "",
    SegundoNombre_Agentes: "",
  }
  Actualizaragente ={
    Contrasena_Agentes: "",
    Correo_Agentes: "",
    Estado_Agentes: "",
    FechaNacimiento_Agentes: "",
    FechaRegistro_Agentes: "",
    IdAgente_Agentes: 0,
    IdTipoDocumento_Agentes: 0,
    NumeroDocumento_Agentes: "",
    NumeroTelfono_Agentes: "",
    PrimerApellido_Agentes: "",
    PrimerNombre_Agentes: "",
    SegundoApellido_Agentes: "",
    SegundoNombre_Agentes: "",
  }
  Nuevoagente ={
    Contrasena_Agentes: "",
    Correo_Agentes: "",
    Estado_Agentes: "",
    FechaNacimiento_Agentes: "",
    FechaRegistro_Agentes: "",
    IdAgente_Agentes: 0,
    IdTipoDocumento_Agentes: 0,
    NumeroDocumento_Agentes: "",
    NumeroTelfono_Agentes: "",
    PrimerApellido_Agentes: "",
    PrimerNombre_Agentes: "",
    SegundoApellido_Agentes: "",
    SegundoNombre_Agentes: "",
  }

  constructor(private servi:ServicioYafService) { }

  ngOnInit() {
    this.tipodedocumento();
  }
  agentestraer()  {
    this.servi.Obteneragentes().subscribe(
      res =>  {
          console.log(res);
          this.agente=res;
      },
      err =>  {
         console.error(err);
      }
    );
  }
  agentestraeruna()  {
      this.servi.unaagentes(this.idbuscar).subscribe(
        res =>  {
          this.buscaragente = res[0];
          console.log(this.buscaragente);
        },
        err =>  {
          console.error(err);
        }
      ); 
  }
  tipodedocumento() {
    this.servi.TipodeDocumento().subscribe(
      res =>  {
          this.TipodeDocumento = res;
          console.log(this.TipodeDocumento);
      },
      err =>  {
        console.error(err);
      }
    )
  }
  actualizaragente()  {
    console.log(this.Actualizaragente);
    delete this.Actualizaragente.FechaRegistro_Agentes;
    this.servi.modificaragente(this.Actualizaragente).subscribe(
      res =>  {
          console.log(res);
      },
      err =>  {
          console.error(err);
      }
    )
  }
  nuevoagente(){
    console.log(this.Nuevoagente);
    delete this.Nuevoagente.FechaRegistro_Agentes;
    delete this.Nuevoagente.IdAgente_Agentes;
    this.servi.crearagente(this.Nuevoagente).subscribe(
      res =>  {
        console.log(res);
    },
    err =>  {
        console.error(err);
    }
    );
  }

}
