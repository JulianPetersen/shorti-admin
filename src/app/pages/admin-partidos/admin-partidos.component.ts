import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ActualizarResultadoComponent } from 'src/app/components/actualizar-resultado/actualizar-resultado.component';
import { ModalEditarequipoComponent } from 'src/app/components/modal-editarequipo/modal-editarequipo.component';
import { Partidos } from 'src/app/models/partidos';

import { LigasService } from 'src/app/services/ligas.service';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-admin-partidos',
  templateUrl: './admin-partidos.component.html',
  styleUrls: ['./admin-partidos.component.scss']
})
export class AdminPartidosComponent {

  date:any;
  hora:any;
  selectedLiga:any;
  listLigas:any[] = []
  ligaSelected:any;
  listEquipos:any
  selectedEquipo1:string="";
  selectedEquipo2:string="";
  estado:string ="";
  listPartidos:any[]=[];
  listPartidosHabilitados:any[]=[]
  listPartidosEnCurso:any[]=[];
  listPartidosFinalizados:any[]=[]
  

  constructor(private ligas:LigasService, public partido:PartidosService,public dialog: MatDialog){}

  ngOnInit(){
    this.getLigas()
    this.getPartidos()
  }

  getLigas(){
    this.ligas.getLigas()
      .subscribe({
        next: ((res) => {
          this.listLigas = res
          console.log(this.listLigas)
        }),
        error: (err)=> {console.log(err)}
      })
  }



  getLiga(){
    console.log(this.selectedLiga)
    this.ligas.getLigasById(this.selectedLiga)
      .subscribe({
        next: ((res) => {
          this.ligaSelected = res
          this.listEquipos = this.ligaSelected.equipos;
          console.log(this.listEquipos);
        })
      })
  }

  createPartido(){
    let newPartido :Partidos ={
      fecha:this.date,
      horario:this.hora,
      equipo1:this.selectedEquipo1,
      equipo2:this.selectedEquipo2,
      resultado:{
        equipo1: 0,
        equipo2: 0
      },
      estado:this.estado
    }
    console.log(newPartido)
    this.partido.createPartido(newPartido)
      .subscribe({
        next: ((res:Partidos) => {
          this.getPartidos()
        })
      })
  }

  getPartidos(){
    this.listPartidosHabilitados = [];
    this.listPartidosEnCurso =  []
    this.listPartidosFinalizados = []
    this.partido.getPartidos()
      .subscribe({
        next: ((res:any[])=> {
          this.listPartidos = res
          for (let partido of this.listPartidos ){
            if(partido.estado === 'Habilitado'){
              this.listPartidosHabilitados.push(partido);
            }
            if(partido.estado ==="En curso"){
              this.listPartidosEnCurso.push(partido)
            }
            if(partido.estado === 'Finalizado'){
              this.listPartidosFinalizados.push(partido)
            }
          }
          console.log('PartidosHabilitados',this.listPartidosEnCurso)
        }),
        error:((error) => {console.log(error)})
      })
  }

  eliminarPartido(id:string){
    this.listPartidosHabilitados = [];
    console.log(id)
    this.partido.deletePartido(id)
      .subscribe({
        next:((res) => {
          console.log('eliminado con exito')
          this.getPartidos();
        }),
        error: (err => {console.log(err)})
      })
  }


  Actualizar(id:string){
    this.listPartidosHabilitados = [];
    const dialogRef = this.dialog.open(ModalEditarequipoComponent, {
      data:id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getPartidos();
    });
  }
  
  actualizarResultado(id:string){
    this.listPartidosHabilitados = [];
    const dialogRef = this.dialog.open(ActualizarResultadoComponent, {
      data:id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getPartidos();
    });
  }

  finalizarPartido(id:string){
    this.listPartidosHabilitados = [];
    let updateEstado:Partidos = {
      estado : 'Finalizado'
    }
    this.partido.updatePartido(id,updateEstado)
      .subscribe({
        next:(res => {
          console.log(res)
          this.getPartidos();
        })
      })
  }
}

