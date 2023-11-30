import { ProductoService } from 'src/app/services/producto.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  options: string[] = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Santa Marta', 'Manizales', 'Pereira', 'Cúcuta', 'Villavicencio', 'Bucaramanga', 'Ibagué', 'Pasto'];

  selectedValue: string = '';

  categoria:any = [];

  productosData = {
    codigo:'',
    categoria:{
      categoriaId:''
    }
  }


  isLoggedIn = false;
  user:any = null;

  constructor(public login:LoginService, private ProductoServicio: ProductoService, private ruta: ActivatedRoute, private enrutador: Router, private categoriaService:CategoriaService, public dialog: MatDialog, loginServise: LoginService) { }

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

  Buscar() {
    if(this.user.username != "quintero68")
    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categoria = dato;
        console.log(this.categoria);
      },(error) => {
        console.log(error);
        Swal.fire('Algo Salió Mal !!','Debes iniciar sesión o registrarte para ver nuestro catalogo','error');
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

  openSelectDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: this.options
    });
    dialogRef.componentInstance.selectionChanged.subscribe((selectedOption: string) => {
      this.selectedValue = selectedOption;
    });

    dialogRef.afterClosed().subscribe(result => {
      // Puedes hacer algo después de que se cierra el diálogo, si es necesario
    });

  }
}

