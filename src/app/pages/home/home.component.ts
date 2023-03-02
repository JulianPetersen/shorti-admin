import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pantallaPrincipal:boolean = false;
  adminLigaPantalla:boolean = false
  adminEquipoPantalla:boolean = false;
  adminPartidoPantalla:boolean = false
  adminSorteoPantalla: boolean = false
  adminRetirosPantalla: boolean = false
  adminUsuariosPantalla: boolean = true
  message:string = '';

  constructor(){

  }

  ngOnInit(){
    
  }

  mostrarPantallaLiga(event:boolean){
    this.pantallaPrincipal = false;
    this.adminEquipoPantalla = false;
    this.adminPartidoPantalla = false
    this.adminSorteoPantalla= false
    this.adminRetirosPantalla = false
    this.adminUsuariosPantalla = false
    this.adminLigaPantalla = event
  }


  mostrarPantallaEquipo(event:boolean){
    console.log(event)
    this.pantallaPrincipal = false;
    this.adminLigaPantalla = false;
    this.adminPartidoPantalla = false
    this.adminSorteoPantalla= false
    this.adminRetirosPantalla = false
    this.adminUsuariosPantalla = false
    this.adminEquipoPantalla = event;
  }

  mostrarPantallaPartidos(event:boolean){
    console.log(event)
    this.pantallaPrincipal = false;
    this.adminLigaPantalla = false;
    this.adminEquipoPantalla = false;
    this.adminSorteoPantalla= false
    this.adminRetirosPantalla = false
    this.adminUsuariosPantalla = false
    this.adminPartidoPantalla = event

  }
  
  mostrarPantallaSorteo(event:boolean){
    this.pantallaPrincipal = false;
    this.adminLigaPantalla = false;
    this.adminEquipoPantalla = false;
    this.adminPartidoPantalla = false
    this.adminRetirosPantalla = false
    this.adminUsuariosPantalla = false
    this.adminSorteoPantalla= event

  }

  mostrarPantallaRetiros(event:boolean){
    this.pantallaPrincipal = false;
    this.adminLigaPantalla = false;
    this.adminEquipoPantalla = false;
    this.adminPartidoPantalla = false
    this.adminSorteoPantalla= false
    this.adminUsuariosPantalla = false
    this.adminRetirosPantalla = event
  }

  mostrarPantallaUsuarios(event:boolean){
    this.pantallaPrincipal = false;
    this.adminLigaPantalla = false;
    this.adminEquipoPantalla = false;
    this.adminPartidoPantalla = false
    this.adminSorteoPantalla= false
    this.adminRetirosPantalla = false
    this.adminUsuariosPantalla = true
  }
}
