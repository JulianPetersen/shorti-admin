import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(public auth:AuthService, public router:Router){

  }

  ngOnInit(){

  }

  usuario:User = {
    userName:"",
    email:"",
    password:"",
    roles:[]
  };

  errorLogin:string=""

  loggin(){
      this.auth.login(this.usuario)
      .subscribe({
        next: (res:any) => {
          localStorage.setItem('token',res.token)
          localStorage.setItem('userId', res.userId)
          this.router.navigate(['/admin'])
        },
        error: (e) =>{
          this.errorLogin = e.error.message
          console.log(e.error.message)
        }
      })
    
  }


}
