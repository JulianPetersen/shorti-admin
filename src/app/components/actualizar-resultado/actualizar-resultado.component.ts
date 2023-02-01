import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Partidos } from 'src/app/models/partidos';
import { PartidosService } from 'src/app/services/partidos.service';
import { ModalEditarequipoComponent } from '../modal-editarequipo/modal-editarequipo.component';

@Component({
  selector: 'app-actualizar-resultado',
  templateUrl: './actualizar-resultado.component.html',
  styleUrls: ['./actualizar-resultado.component.scss']
})
export class ActualizarResultadoComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalEditarequipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public partido:PartidosService
    ){}
    
    resultEquipo1:number;
    resultEquipo2:number;
    estado:string;
    ngOnInit(){
    console.log(this.data)
    }


    actualizarResultado(){
      console.log(this.resultEquipo1)
      console.log(this.resultEquipo2)
      let newPartido:Partidos = {
        resultado:{
          equipo1 : this.resultEquipo1,
          equipo2 : this.resultEquipo2
        },
        estado:this.estado
      }
      console.log(newPartido)
      this.partido.updatePartido(this.data, newPartido)
        .subscribe({
          next:(res => {
            console.log(res)
          }),
          error:(res => {console.log(res)})
        })

        this.dialogRef.close();
     }
}
