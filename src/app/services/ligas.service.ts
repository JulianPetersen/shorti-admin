import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Ligas } from '../models/ligas';


@Injectable({
  providedIn: 'root'
})
export class LigasService {

  constructor(public http:HttpClient, public global:GlobalService) { }

   token:any = localStorage.getItem('token')

  getLigas(){
    let headers = new HttpHeaders({
      'x-access-token':this.token
    })
    return this.http.get<Ligas[]>(`${this.global.URL}/ligas`,{headers:headers})
  }

  createLiga(liga:Ligas){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    const fd = new FormData();
    fd.append('name', liga.name)
    fd.append('imgUrl', liga.imgUrl)
    return this.http.post<Ligas>(`${this.global.URL}/ligas`,fd,{headers:headers})
  }

  getLigasById(id:string){
    let headers = new HttpHeaders({
      "x-access-token":this.token
    })
    return this.http.get(`${this.global.URL}/ligas/${id}`)
  }
  
  deleteLiga(id:string){
    let headers = new HttpHeaders({
      "x-access-token": this.token
    })
    return this.http.delete(`${this.global.URL}/ligas/${id}`, {headers:headers})
  }
}
