import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {


  showFiller = false;


  pantallaPrincipal:boolean = true;
  adminLigaPantalla:boolean = false
  adminEquipoPantalla:boolean = false;
  adminPartidoPantalla:boolean = false
  adminSorteoPantalla: boolean = false
  adminRetirosPantalla: boolean = false
  adminUsuariosPantalla: boolean = false
  message:string = '';

  constructor(){

  }

  ngOnInit(){
    
  }

  mostrarPantallaLiga(){
    this.pantallaPrincipal = false;
    this.adminEquipoPantalla = false;
    this.adminPartidoPantalla = false
    this.adminSorteoPantalla= false
    this.adminRetirosPantalla = false
    this.adminUsuariosPantalla = false
    this.adminLigaPantalla = true
  }


  mostrarPantallaEquipo(){
    
    this.pantallaPrincipal = false;
    this.adminLigaPantalla = false;
    this.adminPartidoPantalla = false
    this.adminSorteoPantalla= false
    this.adminRetirosPantalla = false
    this.adminUsuariosPantalla = false
    this.adminEquipoPantalla = true;
  }

  mostrarPantallaPartidos(){
    
    this.pantallaPrincipal = false;
    this.adminLigaPantalla = false;
    this.adminEquipoPantalla = false;
    this.adminSorteoPantalla= false
    this.adminRetirosPantalla = false
    this.adminUsuariosPantalla = false
    this.adminPartidoPantalla = true

  }
  
  mostrarPantallaSorteo(){
    this.pantallaPrincipal = false;
    this.adminLigaPantalla = false;
    this.adminEquipoPantalla = false;
    this.adminPartidoPantalla = false
    this.adminRetirosPantalla = false
    this.adminUsuariosPantalla = false
    this.adminSorteoPantalla= true

  }

  mostrarPantallaRetiros(){
    this.pantallaPrincipal = false;
    this.adminLigaPantalla = false;
    this.adminEquipoPantalla = false;
    this.adminPartidoPantalla = false
    this.adminSorteoPantalla= false
    this.adminUsuariosPantalla = false
    this.adminRetirosPantalla = true
  }

  mostrarPantallaUsuarios(){
    this.pantallaPrincipal = false;
    this.adminLigaPantalla = false;
    this.adminEquipoPantalla = false;
    this.adminPartidoPantalla = false
    this.adminSorteoPantalla= false
    this.adminRetirosPantalla = false
    this.adminUsuariosPantalla = true
  }
}
