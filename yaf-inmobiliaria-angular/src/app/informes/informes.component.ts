import { Component, OnInit } from '@angular/core';
import { ServicioYafService } from '../servicio-yaf.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {
  private Inmuebles: any = [];
  private Agentes:any = [];
  private Clientes:any = [];


  private informeInmuebleId = "";
  private informeInmuebleFechaIni = "";
  private informeInmuebleFechaFin = "";
  private informeInmuebleArray: any = []

  private informeAgenteId = "";
  private informeAgenteFechaIni = "";
  private informeAgenteFechaFin = "";
  private informeAgenteArray: any = []

  private informeClienteId = "";
  private informeClienteFechaIni = "";
  private informeClienteFechaFin = "";
  private informeClienteArray: any = []
  constructor(private servi: ServicioYafService) { }

  ngOnInit() {
    this.getInmuebles();
    this.getAgentes();
    this.getClientes();
  }

  getInmuebles() {
    this.servi.getInmuebles().subscribe(
      res => {
        this.Inmuebles = res;
      },
      err => console.error(err)
    );
  }

  generarInforme1() {
    if (this.informeInmuebleId != "" && this.informeInmuebleFechaIni != "" && this.informeInmuebleFechaFin != "") {
      this.servi.informe1(this.informeInmuebleId, this.informeInmuebleFechaIni, this.informeInmuebleFechaFin).subscribe(
        res => {
          this.informeInmuebleArray = res;
        },
        err => {
          Swal.fire('No hay citas programadas con estos datos')
        }
      );
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Los campos estan vacios',
      })
    }

  }

  getAgentes(){
    this.servi.getAgente().subscribe(
      res => {
        this.Agentes = res;  
      },
      err => console.error(err)
    );
  }

  generarInforme2() {
    if (this.informeAgenteId != "" && this.informeAgenteFechaIni != "" && this.informeAgenteFechaFin != "") {
      this.servi.informe2(this.informeAgenteId, this.informeAgenteFechaIni, this.informeAgenteFechaFin).subscribe(
        res => {
          this.informeAgenteArray = res;
        },
        err => {
          Swal.fire('No hay citas programadas con estos datos')
        }
      );
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Los campos estan vacios',
      })
    }

  }

  getClientes(){
    this.servi.getCliente().subscribe(
      res => {
        this.Clientes = res;
      },
      err => console.error(err)
    );
  }

  generarInforme3() {
    if (this.informeClienteId != "" && this.informeClienteFechaIni != "" && this.informeClienteFechaFin != "") {
      this.servi.informe3(this.informeClienteId, this.informeClienteFechaIni, this.informeClienteFechaFin).subscribe(
        res => {
          this.informeClienteArray = res;
          console.log(this.informeClienteArray);
        },
        err => {
          Swal.fire('No hay citas programadas con estos datos')
        }
      );
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Los campos estan vacios',
      })
    }

  }

}
