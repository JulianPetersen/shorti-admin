import { Component } from '@angular/core';
import { Equipos } from 'src/app/models/equipos';
import { Ligas } from 'src/app/models/ligas';
import { EquiposService } from 'src/app/services/equipos.service';
import { LigasService } from 'src/app/services/ligas.service';
import {Storage, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage'

@Component({
  selector: 'app-admin-equipo',
  templateUrl: './admin-equipo.component.html',
  styleUrls: ['./admin-equipo.component.scss']
})
export class AdminEquipoComponent {

  listLigas:any[] = []
  listEquipos:any[] = []
  fileSelected:any

  nameEquipo:string="";
  liga:string="";
  imgUrl:string=""

  constructor(private ligas:LigasService, private equipo:EquiposService,private storage:Storage){

  }


  ngOnInit(){
    this.getLigas()
  }

  getLigas(){
    this.ligas.getLigas()
      .subscribe({
        next: ((res)=> {
          this.listLigas = res;
          console.log(res)
        })
      })
  }

  selectedLiga(id:any){
    this.liga = id
    console.log(this.liga)
  }

  createEquipo(){
    let newEquipo:Equipos = {
      name:this.nameEquipo,
      liga:this.liga,
      imgUrl:this.imgUrl,
    }
    console.log(newEquipo)
    
    this.equipo.createEquipo(newEquipo)
      .subscribe({
        next: ((res:Equipos)=> {
          console.log(res)
          this.getLigas()
        }),
        error: ( err => {
          console.log(err.error.message);
        })
      })
  }


  uploadImage(event:any){
    const file = event.target.files[0];
    console.log(file)

    const imgRef = ref(this.storage, `images/${file.name}`)

    uploadBytes(imgRef, file)
      .then(response =>{
        console.log(response)
        let imgUrl = getDownloadURL(imgRef)
          .then(res => {
            this.imgUrl = res;
          })
        console.log(imgUrl)
      } )
      .catch(error => console.log(error))
  }


  uploadFile(event:any){
    const [file] = event.target.files;
    this.fileSelected = {
      fileRaw :file,
      fileName: file.name
    }
  }

  eliminarEquipo(id:string){
    console.log(id)
    this.equipo.deleteEquipo(id)
      .subscribe({
        next: ((res)=> {
          this.getLigas()
          console.log('eliminado con exito')
        }),
        error: (err => {
          console.log(err)
        })
      })
  }
}
