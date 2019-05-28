import { Component, OnInit } from '@angular/core';
import {ServicioYafService} from '../servicio-yaf.service';
import { puts } from 'util';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  citas: any=[];
  idbuscar:string; 
  cliente: any=[];
  agente: any=[];
  inmueble: any=[];

  Buscarcita = {
    Estado_Citas: "",
    FechaRegistro_Citas: "",
    Fecha_Citas: "",
    Hora_Citas: "",
    nombreAgente: "",
    IdCita_Citas: 0,
    nombreCliente: "",
    NombreInmueble_Inmuebles: "",
  }
  Actualizarcita = {
    Estado_Citas: "",
    FechaRegistro_Citas: "",
    Fecha_Citas: "",
    Hora_Citas: "",
    IdAgente_Citas: 0,
    IdCita_Citas: 0,
    IdCliente_Citas: 0,
    IdInmueble_Citas: 0,
  }
  
  nuevacita = {
    Estado_Citas: "",
    Fecha_Citas: "",
    FechaRegistro_Citas: "",
    Hora_Citas: "",
    IdAgente_Citas: 0,
    IdCita_Citas: 0,
    IdCliente_Citas: 0,
    IdInmueble_Citas: 0,
  }

  constructor(private servi:ServicioYafService) { }

  ngOnInit() {
    this.clientes();
    this.agentes();
    this.inmuebles();
  }
  citastraer()  {
    this.servi.ObtenerCitas().subscribe(
      res => {
        console.log(res);
        this.citas=res;
      },
      err =>  {
        console.error(err);
      }
    );
  }
  citatraeruna()  {
    this.servi.unacita(this.idbuscar).subscribe(
      res =>  {
        this.Buscarcita = res[0];
        console.log(this.Buscarcita);
      },
      err =>  {
        console.error(err);
      }
    )
  }
  clientes() {
    this.servi.cliente().subscribe(
      res =>  {
          this.cliente = res;
          console.log(this.cliente);
      },
      err =>  {
        console.error(err);
      }
    )
  }
  agentes() {
    this.servi.agente().subscribe(
      res =>  {
          this.agente = res;
          console.log(this.agente);
      },
      err =>  {
        console.error(err);
      }
    )
  }
  inmuebles() {
    this.servi.inmueble().subscribe(
      res =>  {
          this.inmueble = res;
      },
      err =>  {
        console.error(err);
      }
    )
  }
  actualizarcitas()  {
      console.log(this.Actualizarcita);
      delete this.Actualizarcita.FechaRegistro_Citas;
      this.servi.modificarcita(this.Actualizarcita).subscribe(
        res =>  {
            console.log(res);
        },
        err =>  {
            console.error(err);
        }
      )
  }
  nuevacitas(){
    console.log(this.nuevacita);
    delete this.nuevacita.FechaRegistro_Citas;
    delete this.nuevacita.IdCita_Citas;
    this.servi.crearcita(this.nuevacitas).subscribe(
      res =>  {
        console.log(res);
    },
    err =>  {
        console.error(err);
    }
    )
  }
}
