import { Component } from '@angular/core';
import { Ligas } from 'src/app/models/ligas';
import { LigasService } from 'src/app/services/ligas.service';
import {Storage, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage'


@Component({
  selector: 'app-admin-liga',
  templateUrl: './admin-liga.component.html',
  styleUrls: ['./admin-liga.component.scss']
})
export class AdminLigaComponent {


  constructor( private ligas:LigasService, private storage:Storage){

  }

  fileSelected:any
  nameLiga:string = "";
  imgUrl:string ="";
 
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
    console.log(this.fileSelected.fileRaw)
    console.log(this.fileSelected.fileName)
  }

  // uploadImage(event:any){
  //   const file = event.target.files[0];
  //   console.log(file)

  //   const imgRef = ref(this.storage, `images/${file.name}`)

  //   uploadBytes(imgRef, file)
  //     .then(response =>{
  //       console.log(response)
  //       let imgUrl = getDownloadURL(imgRef)
  //         .then(res => {
  //           this.imgUrl = res;
  //         })
  //       console.log(imgUrl)
  //     } )
  //     .catch(error => console.log(error))
  // }

  eliminarLiga(id:any){
    console.log(id)
    this.ligas.deleteLiga(id)
      .subscribe({
        next: (res => {
          console.log('equipo eliminaod')
          this.getLigas();
        }),
        error: (err => {
          console.log(err);
        })
      })
  }
}
