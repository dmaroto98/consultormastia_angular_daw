import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { ControlComponent } from './control/control.component';
import { ProcessComponent } from './process/process.component';
import { StatsComponent } from './stats/stats.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'control', component: ControlComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'control', pathMatch: 'full'}
  //page not found { path: '**', component:  Page404balanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
