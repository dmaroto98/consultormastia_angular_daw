import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent, canActivate: [AuthGuard], loadChildren: () => import(`./index/index.module`).then(m => m.IndexModule) }
  //page not found { path: '**', component:  Page404balanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
