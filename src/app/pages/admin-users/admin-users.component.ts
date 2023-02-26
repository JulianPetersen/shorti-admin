import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent {
allusers:any[] = []

  constructor(public users:UsersService){

  }

  ngOnInit(){
    this.getallUsers()
  }

  getallUsers(){
    this.users.getAllUsers()
      .subscribe({
        next: ((res:any) => {
          console.log(res)
          this.allusers = res
        })
      })
  }
}
