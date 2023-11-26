import { EmailValuesDTO } from './../services/EmailValuesDTO';
import { RecoverEmailService } from './../services/recover-email.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {

  emailValuesDTO: EmailValuesDTO = new EmailValuesDTO();

  constructor(private recover: RecoverEmailService, private enrutador:Router) { }

  onSubmit(){
    this.enviarEmailUsuario();
  }

  OnReset(){
    
  }

  enviarEmailUsuario() {
    this.recover.enviarEmail().subscribe(
      {
        next: (datos) => {
          alert("correo enviado")
        },
        error: (error: any) => {alert(error)}
      }
    );
    // alert("funciona")
  }

  irListaProductos() {
    this.enrutador.navigate(['/productos']);
  }





}
