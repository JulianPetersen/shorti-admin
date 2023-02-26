import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient, private global:GlobalService) { }

  token:any = localStorage.getItem('token')

  getAllUsers(){
    let headers = new HttpHeaders({
      'x-access-token': this.token
    })
    return this.http.get(`${this.global.URL}/users`,{headers:headers})
  }
}
