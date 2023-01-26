import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AdminLigaComponent } from './admin-liga/admin-liga.component';
import { LoginComponent } from '../pages/login/login.component';



@NgModule({
  declarations: [
    MenuComponent,
    AdminLigaComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MenuComponent,
    AdminLigaComponent,
    LoginComponent

  ]
})
export class ComponentmoduleModule { }
