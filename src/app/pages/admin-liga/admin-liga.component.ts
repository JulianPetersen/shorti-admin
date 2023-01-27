import { Component } from '@angular/core';
import { Ligas } from 'src/app/models/ligas';
import { LigasService } from 'src/app/services/ligas.service';

@Component({
  selector: 'app-admin-liga',
  templateUrl: './admin-liga.component.html',
  styleUrls: ['./admin-liga.component.scss']
})
export class AdminLigaComponent {


  constructor( private ligas:LigasService){

  }

  todasLasLigas:Ligas[] = [];

  ngOnInit(){
    this.getLigas()
  }


  getLigas(){
    this.ligas.getLigas()
      .subscribe({
        next:((res:Ligas[]) => {
          this.todasLasLigas = res
           console.log(res);
        })
      })
  }
}
