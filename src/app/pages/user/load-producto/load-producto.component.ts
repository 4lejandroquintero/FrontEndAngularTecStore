import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-producto',
  templateUrl: './load-producto.component.html',
  styleUrls: ['./load-producto.component.css']
})
export class LoadProductoComponent implements OnInit {

  catId:any;
  productos:any;
  categoria:any = [];

  constructor(
    private route:ActivatedRoute,
    private productoService:ProductoService,
    loginServise: LoginService, private enrutador: Router, private categoriaService:CategoriaService, public dialog: MatDialog) { }

  ngOnInit(): void {
      this.route.params.subscribe((params) => {
        this.catId = params['catId'];

        if(this.catId == 0){
          console.log("Cargando todos los productos");
          this.productoService.obtenerProductosActivos().subscribe(
            (data) => {
              this.productos = data;
              console.log(this.productos);
            },
            (error) => {
              console.log(error);
            }
          )
        }
        else{
          console.log("Cargando un producto en específico");
          this.productoService.obtenerProductosActivosDeUnaCategoria(this.catId).subscribe(
            (data:any) => {
              this.productos = data;
              console.log(this.productos);
            },
            (error) => {
              console.log(error);
            }
          )
        }
      })
  }

  Buscar() {
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

}
