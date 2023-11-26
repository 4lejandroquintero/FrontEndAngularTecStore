import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  loginData = {
    "username" : 'quintero68',
    "password" : '12345',
  }

  constructor(private snack:MatSnackBar,private tokenService:TokenService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }



    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('La contraseña es requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }

    this.tokenService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
        this.tokenService.loginUser(data.token);
        this.tokenService.getCurrentUser().subscribe((user:any) => {
          this.tokenService.setUser(user);
          console.log(user);

          if(this.tokenService.getUserRole() == 'ADMIN'){
            //dashboard admin
            //window.location.href = '/admin';
            this.router.navigate(['recover-password']);
            this.tokenService.loginStatusSubjec.next(true);
          }
          else if(this.tokenService.getUserRole() == 'NORMAL'){
            //user dashboard
            //window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard/0']);
            this.tokenService.loginStatusSubjec.next(true);
          }
          else{
            this.tokenService.logout();
          }
        })
      },(error) => {
        console.log(error);
        this.snack.open('Detalles inválidos , vuelva a intentar !!','Aceptar',{
          duration:3000
        })
      }

     )
  }
}
