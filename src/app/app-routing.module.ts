import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './exterior/login/login.component';
import { InicioComponent } from './interior/inicio/inicio.component';
import { RegistroComponent } from './exterior/registro/registro.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'inicio', component:InicioComponent},
  {path:'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
