import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Partidos } from 'src/app/models/partidos';
import { LigasService } from 'src/app/services/ligas.service';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-modal-editarequipo',
  templateUrl: './modal-editarequipo.component.html',
  styleUrls: ['./modal-editarequipo.component.scss']
})
export class ModalEditarequipoComponent {
  date:any;
  hora:any;
  selectedLiga:any;
  listLigas:any[] = []
  ligaSelected:any;
  listEquipos:any
  selectedEquipo1:string="";
  selectedEquipo2:string="";
  estado:string ="";

  constructor(
    public dialogRef: MatDialogRef<ModalEditarequipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public ligas:LigasService,
    private partido:PartidosService,

  ) {}

    ngOnInit(){
      
      this.getLigas()
      this.getPartidoSelected(this.data)
    }

  onNoClick(): void {
    this.dialogRef.close();
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

  getPartidoSelected(id:string){
    this.partido.getPartidoById(id)
      .subscribe({
        next:((res)=> {
          console.log(this.ligaSelected)
          this.date = res.fecha
          this.hora = res.horario
          this.estado = res.estado
        }),
        error: (err => {console.log(err)})
      })
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

  editarPartido(){
    let newPartido :Partidos ={
      fecha:this.date,
      horario:this.hora,
      estado:this.estado
    }
    this.partido.updatePartido(this.data,newPartido)
      .subscribe({
        next:((res) => {
          console.log(res)
        }),
        error: ((err) => {
          console.log(err);
        })
      })
      this.dialogRef.close();
  }
}
