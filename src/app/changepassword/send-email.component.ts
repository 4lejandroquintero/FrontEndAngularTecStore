import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { SendEmailService } from '../services/send-email.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  opciones : string[] = ['primer bario','nombre de la mama','nombre primera mascota'];
  preguntaSecr = [];

  constructor() { }


  ngOnInit(): void {
  }




}
