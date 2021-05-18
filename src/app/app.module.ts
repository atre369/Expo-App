import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './utilidades/material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent } from './menu/menu.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { Sala1Component } from './salas/sala1/sala1.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { CentroComponent } from './salas/centro/centro.component';
import { Sala2Component } from './salas/sala2/sala2.component';
import { Sala3Component } from './salas/sala3/sala3.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuComponent,
    AutorizadoComponent,
    FormularioAutenticacionComponent,
    LoginComponent,
    RegistroComponent,
    Sala1Component,
    MostrarErroresComponent,
    CentroComponent,
    Sala2Component,
    Sala3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
