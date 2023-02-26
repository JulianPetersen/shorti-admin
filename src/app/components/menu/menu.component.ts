import { Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {


  @Output () mostrarLigaPantalla = new EventEmitter<boolean>();
  @Output () mostrarEquipoPantalla = new EventEmitter<boolean>();
  @Output () mostrarPartidoPantalla = new EventEmitter<boolean>()
  @Output () mostrarSorteoPantalla = new EventEmitter<boolean>();
  @Output () mostrarRetirosPantalla = new EventEmitter<boolean>();
  @Output () mostrarUsuariosPantalla = new EventEmitter<boolean>();


  mostrarPantallaLiga:boolean = true
  mostrarPantallaEquipo:boolean = true
  mostrarPantallaPartidos:boolean = true
  mostrarPantallaSorteo:boolean = true
  mostrarPantallaRetiro:boolean = true
  mostrarPantallaUsuario:boolean = true
  
  constructor(){
    
  }

  mostrarLiga(){
    this.mostrarLigaPantalla.emit(this.mostrarPantallaLiga)
  }

  mostrarEquipo(){
    this.mostrarEquipoPantalla.emit(this.mostrarPantallaEquipo)
  }

  mostrarPartidos(){
    this.mostrarPartidoPantalla.emit(this.mostrarPantallaPartidos)
  }

  mostrarSorteos(){
    this.mostrarSorteoPantalla.emit(this.mostrarPantallaSorteo)
  }

  mostrarRetiros(){
    this.mostrarRetirosPantalla.emit(this.mostrarPantallaRetiro)
  }

  mostrarUsuarios(){
    this.mostrarUsuariosPantalla.emit(this.mostrarPantallaUsuario)
  }
}
