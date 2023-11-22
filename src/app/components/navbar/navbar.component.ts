import { ProductoService } from 'src/app/services/producto.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/services/producto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  producto: Producto = new Producto();
  codigo!: number;

  isLoggedIn = false;
  user:any = null;

  constructor(public login:LoginService, private ProductoServicio: ProductoService, private ruta: ActivatedRoute, private enrutador: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

  // ngOnInitDos(){
  //   this.codigo = this.ruta.snapshot.params['codigo'];
  //   this.ProductoServicio.obtenerPorudctoPorCodigo(this.codigo).subscribe(
  //     {
  //       next: (datos) => this.producto = datos
  //       ,
  //       error: (errores: any) => console.log(errores)
  //     }
  //   );
  // }
  
  buscarCodigo(codigo: number){
    this.enrutador.navigate(['editar-producto', codigo]);
  }

}
