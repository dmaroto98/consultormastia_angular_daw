import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainComponent } from './index/main/main.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { CatalogoComponent } from './secundarias/catalogo/catalogo.component';
import { ConsultarComponent } from './secundarias/consultar/consultar.component';
import { ContactanosComponent } from './secundarias/contactanos/contactanos.component';
import { EquipoComponent } from './secundarias/equipo/equipo.component';
import { HacemosComponent } from './secundarias/hacemos/hacemos.component';
import { PresentarComponent } from './secundarias/presentar/presentar.component';
import { HeadComponent } from './shared/head/head.component';

const routes: Routes = [{ path: '', component: MainComponent },
{ path: 'main', component: MainComponent },
{ path: 'equipo', component: EquipoComponent},
{ path: 'hacemos', component: HacemosComponent},
{ path: 'catalogo', component: CatalogoComponent},
{ path: 'consultar', component: ConsultarComponent},
{ path: 'presentar', component: PresentarComponent},
{ path: 'contactanos', component: ContactanosComponent}
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
