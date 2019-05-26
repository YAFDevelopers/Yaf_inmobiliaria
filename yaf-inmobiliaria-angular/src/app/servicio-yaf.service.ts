import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Inmueble} from './models/Inmueble';

@Injectable({
  providedIn: 'root'
})
export class ServicioYafService {

  Url = 'http://localhost:3000';

  constructor(private http:HttpClient) { }
// ////////////////////////////////////////////////////////
//             METODOS INMUEBLES(Yeisson)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  getTipoInmubles(){
    return this.http.get(`${this.Url}/tipoinmueble`);
  }

  saveInmueble(inmueble:Inmueble){
    return this.http.post(`${this.Url}/inmueble`,inmueble);
  }

  getInmuebles(){
    return this.http.get(`${this.Url}/inmueble`);
  }

  getInmueble(id:string){
    return this.http.get(`${this.Url}/inmueble/${id}`);
  }
  
  updateInmueble(updateInmueble:Inmueble){
    return this.http.put(`${this.Url}/inmueble`,updateInmueble);
  }
// ////////////////////////////////////////////////////////
//                      FIN
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
}

