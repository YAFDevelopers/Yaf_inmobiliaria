import { Component, OnInit } from '@angular/core';
import { ServicioYafService }  from '../servicio-yaf.service';
import { Cliente } from '../models/Cliente';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any = [];
  TipoDocumentos: any = [];

  idBusqueda: string = '';

  NuevoCliente: Cliente = {
    IdCliente_Clientes: 0,
    IdTipoDocumento_Clientes : 0,
    NumeroDocumeto_Clientes : 0,
    PrimerNombre_Clientes : '',
    SegundoNombre_Clientes : '',
    PrimerApellido_Clientes : '',
    SegundoApellido_Clientes : '',
    FechaNacimiento_Clientes : null,
    Correo_Clientes : '',
    Contrasena_Clientes : '',
    NumeroTelefono_Clientes : '',
    Estado_Clientes : '',
    FechaRegistro_Clientes : null
  }

  
  ActualizarCliente: Cliente = {
    IdCliente_Clientes: 0,
    IdTipoDocumento_Clientes : 0,
    NumeroDocumeto_Clientes : 0,
    PrimerNombre_Clientes : '',
    SegundoNombre_Clientes : '',
    PrimerApellido_Clientes : '',
    SegundoApellido_Clientes : '',
    FechaNacimiento_Clientes : null,
    Correo_Clientes : '',
    Contrasena_Clientes : '',
    NumeroTelefono_Clientes : '',
    Estado_Clientes : '',
    FechaRegistro_Clientes : null
  }
  BuscarCliente: Cliente ={
    IdCliente_Clientes: 0,
    IdTipoDocumento_Clientes : 0,
    NumeroDocumeto_Clientes : 0,
    PrimerNombre_Clientes : '',
    SegundoNombre_Clientes : '',
    PrimerApellido_Clientes : '',
    SegundoApellido_Clientes : '',
    FechaNacimiento_Clientes : null,
    Correo_Clientes : '',
    Contrasena_Clientes : '',
    NumeroTelefono_Clientes : '',
    Estado_Clientes : '',
    FechaRegistro_Clientes : null

  }
  
  constructor(private servi : ServicioYafService ) {

   }

  ngOnInit() {
    this.ListarClientes();
    this.getTipoDocumentoCliente();
  }
  ListarClientes() {
    this.servi.getClientes().subscribe(
      res => {
        this.clientes = res;
        console.log(this.clientes);
      },
      err => console.error(err)
    );
  }
  getTipoDocumentoCliente() {
    this.servi.getTipoDocumentoCliente().subscribe(
      res => {
        this.TipoDocumentos = res;
        console.log(this.TipoDocumentos);
      },
      err => console.error(err)
    )
  }
  CrearCliente() {
    Swal.fire({
      title: '¿Esta seguro de los datos del cliente?',
      position: 'top-end',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        delete this.NuevoCliente.IdCliente_Clientes;
        delete this.NuevoCliente.FechaRegistro_Clientes;
        this.servi.saveCliente(this.NuevoCliente).subscribe(
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
                console.log(this.NuevoCliente);
              }
            })
          },
          err => console.error(err)
        )
      }
    })
  }
  
  actualizarCliente() {
    Swal.fire({
      title: '¿Esta seguro de los datos para actualizar el Cliente?',
      position: 'top-end',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        delete this.ActualizarCliente.FechaRegistro_Clientes;
        this.servi.updateCliente(this.ActualizarCliente.IdCliente_Clientes,this.ActualizarCliente).subscribe(
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
                console.log(this.actualizarCliente);
              }
            })
          },
          err => console.error(err)
        )
      }
    });
  }

  obtenerClienteBuscar(id: string) {
    if (this.idBusqueda != '0' && this.idBusqueda != '') {
      this.servi.getCliente_C(id).subscribe(
        res => {
          this.BuscarCliente = res[0];
        },
        err => {
          // console.error(err);
          console.log(this.idBusqueda);
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
