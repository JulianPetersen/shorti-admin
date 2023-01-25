import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AdminLigaComponent } from './admin-liga/admin-liga.component';



@NgModule({
  declarations: [
    MenuComponent,
    AdminLigaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MenuComponent,
    AdminLigaComponent
  ]
})
export class ComponentmoduleModule { }
