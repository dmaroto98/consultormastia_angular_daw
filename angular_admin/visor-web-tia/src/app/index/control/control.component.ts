import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  today: number = Date.now();
  users;
  mails;
  actividades;

  constructor(private userService: UserService) { 

  }

  fetchUSers(){
    this.users = this.userService.fetchUsersMongo();
  }

  fetchMails(){
    this.mails = this.userService.fetchMails();
  }

  fetchAct(){
    this.actividades = this.userService.fetchAct();
  }

  ngOnInit() {
    this.fetchUSers();
    this.fetchMails();
    this.fetchAct();
  }

}
