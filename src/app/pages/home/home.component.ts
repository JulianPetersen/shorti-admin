import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pantallaPrincipal:boolean = false;
  adminLigaPantalla:boolean = true

  message:string = '';

  constructor(){

  }

  ngOnInit(){
    
  }

  mostrarPantallaLiga(event:boolean){
    this.pantallaPrincipal = false;
    this.adminLigaPantalla =event
  }
}
