import { Component } from '@angular/core';
import { Retiros } from 'src/app/models/retiros';
import { RetirosService } from 'src/app/services/retiros.service';

@Component({
  selector: 'app-admin-retiros',
  templateUrl: './admin-retiros.component.html',
  styleUrls: ['./admin-retiros.component.scss']
})
export class AdminRetirosComponent {

  allRetiros:Retiros[] = []
  

  constructor(public retiros:RetirosService){

  }

  ngOnInit(){
    this.getRetiros()
  }

  getRetiros(){
    this.retiros.getRetiros()
      .subscribe({
        next:((res:Retiros[]) => {
          this.allRetiros = res;
          console.log(this.allRetiros)
        })
      })
  }


  updateEstado(id:string){
    let body = {
      estado:"Pagado"
    }
    this.retiros.updateRetiros(id,body)
      .subscribe({
        next:((res) => {
          console.log(res)
          this.getRetiros();
        })
      })
  }

  updateEstadoPendiente(id:string){
    let body = {
      estado:"Pendiente"
    }
    this.retiros.updateRetiros(id,body)
      .subscribe({
        next:((res) => {
          console.log(res)
          this.getRetiros();
        })
      })
  }
}
