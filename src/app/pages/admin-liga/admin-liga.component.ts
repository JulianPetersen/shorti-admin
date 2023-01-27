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

  fileSelected:any
  nameLiga:string = "";
 
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

  createLiga(){
    let newLiga:Ligas = {
      name:this.nameLiga,
      imgUrl:this.fileSelected.fileRaw,
    }
    console.log(newLiga)
    
    this.ligas.createLiga(newLiga)
      .subscribe({
        next: ((res:Ligas)=> {
          console.log(res)
          this.getLigas()
        }),
        error: ( err => {
          console.log(err.error.message);
        })
      })
  }

  uploadFile(event:any){
    const [file] = event.target.files;
    this.fileSelected = {
      fileRaw :file,
      fileName: file.name
    }
  }
}
