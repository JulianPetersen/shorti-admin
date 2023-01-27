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
}
