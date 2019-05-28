import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable(
  {
    providedIn: 'root'
  })

export class ServicioYafService {

  private Url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
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
  TipodeDocumento() {
    return this.http.get(`${this.Url}/tipdoc`); 
  }
  modificaragente(data) {
    return this.http.put(`${this.Url}/agente`,data); 
  }
}
  