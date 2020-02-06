import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {


  constructor(private router: Router, public _MessageService: MessageService) { }

  ngOnInit() {
  }
  action() {
    this.router.navigateByUrl('/main');
  }
  contactForm(form) {

    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire(
        'Formulario de contacto',
        'Mensaje enviado correctamente',
        'success'
      )
    });
  }


}
