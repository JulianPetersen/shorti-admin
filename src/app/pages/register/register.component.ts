import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  usuario:User = {
    userName:"",
    email:"",
    password:"",
    roles:["admin"]
  };

  constructor(public auth:AuthService, public router:Router){

  }

  ngOnInit(){

  }


  register(){ 
    console.log(this.usuario)
    this.auth.register(this.usuario)
      .subscribe({
        next : ((res:any) => {
          localStorage.setItem('token',res.token)
          localStorage.setItem('userId', res.userId)
          this.router.navigate(['/home'])
        }),
        error : (err => {
          console.log(err)
        })

      })
  }
}
