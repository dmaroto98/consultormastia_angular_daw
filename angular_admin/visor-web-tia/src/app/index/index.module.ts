import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { ControlComponent } from './control/control.component';
import { ProcessComponent } from './process/process.component';
import { StatsComponent } from './stats/stats.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './control/user.service';


@NgModule({
  declarations: [ControlComponent, ProcessComponent, StatsComponent, ProfileComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  providers: [UserService]
})
export class IndexModule { }
