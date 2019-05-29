import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inmueble } from './models/Inmueble';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Cliente } from './models/Cliente';


@Injectable(
  {
    providedIn: 'root'
  })

export class ServicioYafService {

  private Url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  // ////////////////////////////////////////////////////////
  //             METODOS INMUEBLES(Yeisson)
  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  getTipoInmubles() {
    return this.http.get(`${this.Url}/tipoinmueble`);
  }

  saveInmueble(inmueble: Inmueble) {
    return this.http.post(`${this.Url}/inmueble`, inmueble);
  }

  getInmuebles() {
    return this.http.get(`${this.Url}/inmueble`);
  }

  getInmueble(id: string) {
    return this.http.get(`${this.Url}/inmueble/${id}`);
  }

  updateInmueble(updateInmueble: Inmueble) {
    return this.http.put(`${this.Url}/inmueble`, updateInmueble);
  }
  // ////////////////////////////////////////////////////////
  //                      FIN
  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  // ////////////////////////////////////////////////////////
  //             METODOS INFORMES(Yeisson)
  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  informe1(id, fecha_ini, fecha_fin) {
    return this.http.get(`${this.Url}/consulta/primera/${id}/${fecha_ini}/${fecha_fin}`);
  }
  getAgente(){
    return this.http.get(`${this.Url}/agente`);
  }
  informe2(id, fecha_ini, fecha_fin) {
    return this.http.get(`${this.Url}/consulta/segunda/${id}/${fecha_ini}/${fecha_fin}`);
  }
  getCliente(){
    return this.http.get(`${this.Url}/cliente`);    
  }
  informe3(id, fecha_ini, fecha_fin){
    return this.http.get(`${this.Url}/consulta/tercera/${id}/${fecha_ini}/${fecha_fin}`);
  }
  // citas
  ObtenerCitas(){
    return this.http.get(`${this.Url}/cita`);                   
 }
 unacita(id:string)  {
    return this.http.get(`${this.Url}/cita/${id}`);
}
cliente() {
      return this.http.get(`${this.Url}/cliente`); 
}
agente() {
  return this.http.get(`${this.Url}/agente`); 
}
inmueble()  {
  return this.http.get(`${this.Url}/inmueble`); 
}
modificarcita(data) {
  return this.http.put(`${this.Url}/cita`,data); 
}
crearcita(data) {
      return this.http.post(`${this.Url}/cita`,data); 
}
//Agentes
Obteneragentes()  {
  return this.http.get(`${this.Url}/agente`);  
}
unaagentes(id:string)  {
  return this.http.get(`${this.Url}/agente/${id}`);
}
  // ////////////////////////////////////////////////////////
  //             METODOS CLIENTES (Alejandro)
  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  getClientes() {
    return this.http.get(`${this.Url}/cliente`);
  }
  getCliente_C(id: string) {
    return this.http.get(`${this.Url}/Cliente/${id}`);
  }
  saveCliente(cliente : Cliente){
    return this.http.post(`${this.Url}/Cliente`, cliente);
  }
  updateCliente(id, updatedCliente){
    return this.http.put(`${this.Url}/Cliente`, updatedCliente);
  }
  getTipoDocumentoCliente() {
    return this.http.get(`${this.Url}/tipdoc`);
  }
    // ////////////////////////////////////////////////////////
  //                      FIN
  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  TipodeDocumento() {
    return this.http.get(`${this.Url}/tipdoc`); 
  }
  modificaragente(data) {
    return this.http.put(`${this.Url}/agente`,data); 
  }
  crearagente(data) {
    return this.http.post(`${this.Url}/agente`,data);
  }
  
}
  