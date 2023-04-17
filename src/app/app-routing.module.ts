import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegisterComponent } from './pages/register/register.component';
import { TerminoComponent } from './pages/termino/termino.component';

const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'admin',component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'terminos',component: TerminoComponent},
  {path: 'politicas',component: PoliticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
