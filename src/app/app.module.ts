import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentmoduleModule } from './components/componentmodule.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { AdminPartidosComponent } from './pages/admin-partidos/admin-partidos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//material
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AdminPartidosComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentmoduleModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
