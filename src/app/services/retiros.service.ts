import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Retiros } from '../models/retiros';

@Injectable({
  providedIn: 'root'
})
export class RetirosService {

  constructor(public http:HttpClient, public global:GlobalService) { }

  token:any = localStorage.getItem('token')

  getRetiros(){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    return this.http.get<Retiros[]>(`${this.global.URL}/retiros`,{headers:headers})
  }

  updateRetiros(id:string, body:any){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    return this.http.put(`${this.global.URL}/retiros/updateestado/${id}`,body,{headers:headers})
  }
}
