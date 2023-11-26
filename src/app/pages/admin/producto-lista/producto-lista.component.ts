import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/services/productos';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent {
  // productos: Producto[] = [];
  // descripcion!: string;
  // producto: any;

  constructor(private productosServicio: ProductoService, private enrutador: Router) {}

  ngOnInit(){
    //Cargamos los productos
    // this.obtenerProductos();
  }

  // obtenerDatos(): void{
  //   this.productosServicio.obtenerPorudctoPorDescripcion(this.descripcion).subscribe(
  //     (data) => {
  //       this.producto = data;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // private obtenerProductos(){
  //   //Consumir los datos del observable (suscribirnos)
  //   this.productosServicio.obtenerProductosLista().subscribe(
  //     (datos => {
  //       this.productos = datos;
  //     })
  //   );
  // }

  editarProducto(id: number){
    this.enrutador.navigate(['admin/editar-producto', id]);
  }

  buscarProductoPorDescripcion(descripcion: string){
    this.enrutador.navigate(['buscar-producto', descripcion]);
  }

  // eliminarProducto(id: number){
  //   this.productosServicio.eliminarProducto(id).subscribe(
  //     {
  //       next: (datos) => this.obtenerProductos(),
  //       error: (errores) => console.log(errores)
  //     }
  //   );
  // }
}
