import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Partidos } from '../models/partidos';


@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  constructor(public http:HttpClient, public global:GlobalService) { }

  token:any = localStorage.getItem('token')

  createPartido(partido:Partidos){
    let headers = new HttpHeaders({
      'x-access-token':this.token
    })
    return this.http.post<Partidos>(`${this.global.URL}/partidos`,partido,{headers:headers})
  }

  getPartidos(){
    let headers = new HttpHeaders({
      'x-access-token':this.token
    })
    return this.http.get<Partidos[]>(`${this.global.URL}/partidos`,{headers:headers})
  }

  deletePartido(id:string){
    let headers = new HttpHeaders({
      'x-access-token':this.token
    })
    return this.http.delete(`${this.global.URL}/partidos/${id}`,{headers:headers})
  }

  updatePartido(id:string, partido:Partidos){
    let headers = new HttpHeaders({
      'x-access-token':this.token
    })
    return this.http.put(`${this.global.URL}/partidos/${id}`,partido,{headers:headers})
  }

  getPartidoById(id:string){
    let headers = new HttpHeaders({
      'x-access-token':this.token
    })
    return this.http.get<Partidos>(`${this.global.URL}/partidos/${id}`,{headers:headers})
  }
}
