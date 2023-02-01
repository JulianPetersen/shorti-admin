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

  mostrarPantallaLiga:boolean = true
  mostrarPantallaEquipo:boolean = true
  mostrarPantallaPartidos:boolean = true
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
}
