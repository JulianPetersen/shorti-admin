import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AdminLigaComponent } from '../pages/admin-liga/admin-liga.component';
import { LoginComponent } from '../pages/login/login.component';
import { ShortiButtonComponent } from './shorti-button/shorti-button.component';
import { AdminEquipoComponent } from '../pages/admin-equipo/admin-equipo.component';



@NgModule({
  declarations: [
    MenuComponent,
    AdminLigaComponent,
    LoginComponent,
    ShortiButtonComponent,
    AdminEquipoComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MenuComponent,
    AdminLigaComponent,
    LoginComponent,
    ShortiButtonComponent,
    AdminEquipoComponent
  ]
})
export class ComponentmoduleModule { }
