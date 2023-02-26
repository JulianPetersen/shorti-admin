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
import { SorteoAdminComponent } from './pages/sorteo-admin/sorteo-admin.component';
import { AdminRetirosComponent } from './pages/admin-retiros/admin-retiros.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AdminPartidosComponent,
    SorteoAdminComponent,
    AdminRetirosComponent,
    AdminRetirosComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentmoduleModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
