import { Component } from '@angular/core';
import { Premiosorteo } from 'src/app/models/premiosorteo';
import { GlobalService } from 'src/app/services/global.service';
import { SorteoserviceService } from 'src/app/services/sorteoservice.service';

@Component({
  selector: 'app-sorteo-admin',
  templateUrl: './sorteo-admin.component.html',
  styleUrls: ['./sorteo-admin.component.scss']
})
export class SorteoAdminComponent {

  cantidadNuevoSorteo:number;
  fechaNuevoSorteo:string;

  cantidadSorteo:number
  fechaSorteo:string;
  cantParticipaciones:number
  sorteoId:string;
  participantes:any[]=[];
  ganadorSorteo:any;
  

  cantidadSorteoRealizado:number
  fechaSorteoRealizado:string;
  cantParticipacionesRealizado:number
  ganadorSorteoRealizado:string;

  constructor(public sorteo:SorteoserviceService, private global:GlobalService){

  }

  ngOnInit(){
    this.getSorteo();
    this.getUltimoSorteoRealizado()
  }

  getSorteo(){
    this.sorteo.getInfoSorteoActual()
      .subscribe({
        next:((res:Premiosorteo[]) => {
          console.log(res)
          if(res.length != 0){
            this.sorteoId = res[0]._id
            this.cantidadSorteo = res[0].cantidad
            this.fechaSorteo = res[0].fecha
            this.participantes = res[0].participantes
            this.cantParticipaciones = res[0].cantParticipaciones;
            this.ganadorSorteo = res[0].ganador
          }else{
            this.cantidadSorteo = 0
            this.fechaSorteo = '-'
            this.cantParticipaciones = 0
          }
          
          
        })
      })
  }

  getUltimoSorteoRealizado(){
    this.sorteo.getUltimosorteoRealizado()
      .subscribe({
        next: ((res:any)=> {
          if(res.length != 0){
            console.log('ultimo sorteo Realizado',res)
            this.cantParticipacionesRealizado = res[0].cantParticipaciones
            this.fechaSorteoRealizado = res[0].fecha
            this.cantidadSorteoRealizado = res[0].cantidad
            this.ganadorSorteoRealizado = res[0].ganador.username
          }else{
            console.log('todavia no hubo sorteo')
          }
          
        }),
        error:((err) => {
          console.log(err)
        })
      })
  }

  updateGanador(){
      let participantes = this.participantes
      if(participantes.length == 0){
        alert('no hay participantes para realizar el sorteo.')
      }else{
        let ganador = this.ganadorSorteo
      console.log(ganador)
      if(ganador != null) {
        alert('ya existe un ganador para este sorteo')
      }else{
        const aleatorio = participantes[Math.floor(Math.random() * participantes.length)];
        console.log(aleatorio)
        let bodyUpdate = {
          sorteoId:this.sorteoId,
          ganador: aleatorio
        }
        this.sorteo.actualizarGanador(bodyUpdate)
          .subscribe({
            next: ((res) => {
              console.log(res)
              alert('ganador seleccionado')
              this.getSorteo();
              this.getUltimoSorteoRealizado();
            }), error: ((err) => {
              console.log(err)
            })
          })
      }
      }
      
      
   }

   crearSorteo(){
    let sorteo = {
      cantidad: this.cantidadNuevoSorteo,
      fecha: this.fechaNuevoSorteo
    }
    console.log(sorteo)

    this.sorteo.crearNuevoSorteo(sorteo)
      .subscribe({
        next:((res) => {
          console.log(res)
          this.getSorteo();
        })
      })
   }
  
}
