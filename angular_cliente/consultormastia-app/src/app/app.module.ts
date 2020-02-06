import { BrowserModule } from "@angular/platform-browser";
import { Component, NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MessageService } from './secundarias/contactanos/message.service';



import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./index/main/main.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavComponent } from "./shared/nav/nav.component";
import { CatalogoComponent } from "./secundarias/catalogo/catalogo.component";
import { ConsultarComponent } from "./secundarias/consultar/consultar.component";
import { ContactanosComponent } from "./secundarias/contactanos/contactanos.component";
import { EquipoComponent } from "./secundarias/equipo/equipo.component";
import { HacemosComponent } from "./secundarias/hacemos/hacemos.component";
import { PresentarComponent } from "./secundarias/presentar/presentar.component";
import { HeadComponent } from "./shared/head/head.component";

import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './secundarias/login/login.component';

const rutas: Routes = [];

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavComponent,
    CatalogoComponent,
    ConsultarComponent,
    ContactanosComponent,
    EquipoComponent,
    HacemosComponent,
    PresentarComponent,
    HeadComponent,
    LoginComponent
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/my/app" }, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
