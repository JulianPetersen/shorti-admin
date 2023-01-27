import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pantallaPrincipal:boolean = true;
  adminLigaPantalla:boolean = false
  adminEquipoPantalla:boolean = false;

  message:string = '';

  constructor(){

  }

  ngOnInit(){
    
  }

  mostrarPantallaLiga(event:boolean){
    this.pantallaPrincipal = false;
    this.adminEquipoPantalla = false;
    this.adminLigaPantalla = event
  }
}
