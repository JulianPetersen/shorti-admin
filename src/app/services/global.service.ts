import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  // //dev
  // URL:string = "http://localhost:4000/api"

  //prod
  URL:string = "https://shorti.store/api"
}
