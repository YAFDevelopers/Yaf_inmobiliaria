import { Component, OnInit } from '@angular/core';
import { ServicioYafService } from '../servicio-yaf.service';
import { Inmueble } from '../models/Inmueble';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {

  TipoInmuebles: any = [];
  inmuebles: any = [];

  NuevoInmueble: Inmueble = {
    IdInmueble_Inmuebles: null,
    IdTipoInmueble_Inmuebles: 1,
    NombreInmueble_Inmuebles: '',
    Descripcion_Inmuebles: '',
    Direccion_Inmuebles: '',
    Valor_Inmuebles: '',
    Estado_Inmuebles: 'ACTIVO',
    FechaRegistro_Inmuebles: null
  }

  ActulizarInmueble: Inmueble = {
    IdInmueble_Inmuebles: 0,
    IdTipoInmueble_Inmuebles: 1,
    NombreInmueble_Inmuebles: '',
    Descripcion_Inmuebles: '',
    Direccion_Inmuebles: '',
    Valor_Inmuebles: '',
    Estado_Inmuebles: '',
    FechaRegistro_Inmuebles: null
  }

  idBusqueda: string = '';

  BuscarInmueble: Inmueble = {
    IdInmueble_Inmuebles: 0,
    IdTipoInmueble_Inmuebles: 1,
    NombreInmueble_Inmuebles: '',
    Descripcion_Inmuebles: '',
    Direccion_Inmuebles: '',
    Valor_Inmuebles: '',
    Estado_Inmuebles: '',
    FechaRegistro_Inmuebles: null
  }

  constructor(private servi: ServicioYafService) { }

  ngOnInit() {
    this.ListarInmuebles();
    this.getTipoInmuebles();
  }

  getTipoInmuebles() {
    this.servi.getTipoInmubles().subscribe(
      res => {
        this.TipoInmuebles = res;
      },
      err => console.error(err)
    )
  }

  selectTipInm(event: any) {
    this.NuevoInmueble.IdTipoInmueble_Inmuebles = event.target.value;
  }

  AgregarInmueble() {
    Swal.fire({
      title: '¿Esta seguro de los datos del Inmueble?',
      position: 'top-end',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        delete this.NuevoInmueble.IdInmueble_Inmuebles;
        delete this.NuevoInmueble.FechaRegistro_Inmuebles;
        this.servi.saveInmueble(this.NuevoInmueble).subscribe(
          res => {
            Swal.fire({
              title: 'Genial',
              text: 'Inmueble registrado sin errores',
              type: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.value) {
                location.reload();
              }
            })
          },
          err => console.error(err)
        )
      }
    })
  }

  ListarInmuebles() {
    this.servi.getInmuebles().subscribe(
      res => {
        this.inmuebles = res;
        console.log(this.inmuebles);
      },
      err => console.error(err)
    );
  }

  obtenerInmuebleActualizar(id: string) {
    this.servi.getInmueble(id).subscribe(
      res => {
        this.ActulizarInmueble = res[0]
      },
      err => console.error(err)
    );
  }

  actulizarInmueble() {
    Swal.fire({
      title: '¿Esta seguro de los datos del Inmueble?',
      position: 'top-end',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.servi.updateInmueble(this.ActulizarInmueble).subscribe(
          res => {
            Swal.fire({
              title: 'Genial',
              text: 'Inmueble actualizado sin errores',
              type: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.value) {
                location.reload();
              }
            })
          },
          err => console.error(err)
        )
      }
    });
  }

  obtenerInmuebleBuscar(id: string) {
    if (this.idBusqueda != '0' && this.idBusqueda != '') {
      this.servi.getInmueble(id).subscribe(
        res => {
          this.BuscarInmueble = res[0];
        },
        err => {
          // console.error(err);
          Swal.fire(
            'Inmueble no encontrado',
            'Revise la información',
            'error'
          );
        }
      );
    } else {
      Swal.fire(
        'Dato invalido',
        'Revise la información',
        'error'
      );
    }
  }
}
