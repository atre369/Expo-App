import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentroComponent } from './salas/centro/centro.component';
import { Sala1Component } from './salas/sala1/sala1.component';
import { Sala2Component } from './salas/sala2/sala2.component';
import { Sala3Component } from './salas/sala3/sala3.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';

const routes: Routes = [
  {path: 'centro', component: CentroComponent},
  {path: 'sala1', component: Sala1Component},
  {path: 'sala2', component: Sala2Component},
  {path: 'sala3', component: Sala3Component},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
