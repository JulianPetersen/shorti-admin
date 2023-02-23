import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Premiosorteo } from '../models/premiosorteo';

@Injectable({
  providedIn: 'root'
})
export class SorteoserviceService {

  constructor(private http:HttpClient, private global:GlobalService) { }

  token:any = localStorage.getItem('token')

  getInfoSorteoActual(){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    return this.http.get<Premiosorteo[]>(`${this.global.URL}/premio`,{headers:headers})
  }


  crearNuevoSorteo(sorteo:any){
    let headers = new HttpHeaders({
      'x-access-token':this.token
    })
    return this.http.post(`${this.global.URL}/premio`,sorteo,{headers:headers})
  }

  actualizarGanador(body:any){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    return this.http.put(`${this.global.URL}/premio/updateGanador`,body,{headers:headers})
  }

  getUltimosorteoRealizado(){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    return this.http.get(`${this.global.URL}/sorteoRealizado`,{headers:headers})
  }
}
