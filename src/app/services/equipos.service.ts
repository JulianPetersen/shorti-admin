import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Equipos } from '../models/equipos';
@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(public http:HttpClient, public global:GlobalService) { }

  token:any = localStorage.getItem('token')


  getEquipos(){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    return this.http.get<Equipos[]>(`${this.global.URL}/equipos`,{headers:headers})
  }

  createEquipo(equipo:Equipos){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    const fd = new FormData();
    fd.append('name', equipo.name)
    fd.append('liga', equipo.liga)
    fd.append('imgUrl', equipo.imgUrl)
    return this.http.post<Equipos>(`${this.global.URL}/equipos`,fd,{headers:headers})
  }

  getEquiposByLigas(ligaId:string){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    return this.http.get<Equipos[]>(`${this.global.URL}/equipos/getEquipoByLiga/${ligaId}`,{headers:headers})
  }

  deleteEquipo(id:string){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    return this.http.delete(`${this.global.URL}/equipos/${id}`,{headers:headers})
  }
}
