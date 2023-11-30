import  Swal  from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  opciones : string[] = ['primer bario','nombre de la mama','nombre primera mascota'];
  public user = {
    username : '',
    tipousuario : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : '',
    admin : false,
    preguntaSecreta: '',
    respuestaSecreta : '',
  }



  constructor(private userService:UserService,private snack:MatSnackBar ) { }



  ngOnInit(): void {
  }



  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });

      return;
  }



  if(this.user.password.length <= 6 ){
    this.snack.open('Contraseña muy corta !!','Aceptar',{
      duration : 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    });
          return;
  }

  if(this.user.password.length >15){
    this.snack.open('Contraseña muy larga !!','Aceptar',{
      duration : 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    });
    return
  }

  if(this.user.email.indexOf('@')===-1){
    this.snack.open('Email no cumple !!','Aceptar',{
      duration : 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    });
    return;
  }


 if(this.user.admin) {
  let claveIngresada = window.prompt("Ingrese la clave de confirmación:");
  if(claveIngresada === "*****"){
    Swal.fire('ADMINISTRADOR','Usuario registrado como administrador con exito en el sistema','success');
  }else {
    this.snack.open('No tiene permitido registrar como ADMIN !!','Aceptar',{
      duration : 3000,
      verticalPosition : 'top',
      horizontalPosition : 'right'
    });
    return;
  }
 }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success');
        this.user.username=('');
        this.user.tipousuario=('');
        this.user.password=('');
        this.user.nombre=('');
        this.user.apellido=('');
        this.user.email=('');
        this.user.telefono=('');
        this.user.admin=false;
        this.user.preguntaSecreta=('');
        this.user.respuestaSecreta=('');
      },(error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
          duration : 3000
        });
      }
    )
  }

}
