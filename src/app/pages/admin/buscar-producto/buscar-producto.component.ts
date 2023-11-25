import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/services/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent {
  producto: Producto = new Producto();
  descripcion!: string;
  id!: number;

  constructor(private productoServicio: ProductosService, private ruta: ActivatedRoute, private enrutador: Router){}

  ngOnInit() {
    this.descripcion = this.ruta.snapshot.params['descripcion'];
    this.productoServicio.obtenerPorudctoPorDescripcion(this.descripcion).subscribe(
      {
        next: (datos) => this.producto = datos,
        error: (errores: any) => console.log(errores)
      }
    );
  }

  onSubmit(){
    //editar el producto
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoServicio.guardarrProducto(this.id, this.producto).subscribe(
      {
        next: (datos) => this.irProductoLista(),
        error: (errores) => console.log(errores)
      }
    );
  }
  editarProductoDescripcion(descripcion: string){
    this.enrutador.navigate(['producto-lista', descripcion]);
  }


  irProductoLista(){
    this.enrutador.navigate(['/productos']);
  }
  // ngOnInit(){
  //   this.descripcion = this.ruta.snapshot.params['descripcion'];
  //   this.ProductoServicio.obtenerPorudctoPorDescripcion(this.descripcion).subscribe(
  //     {
  //       next: (datos) => this.producto = datos
  //       ,
  //       error: (errores: any) => console.log(errores)
  //     }
  //   );
  // }
  // editarProductoDescripcion(descripcion: string){
  //   this.enrutador.navigate(['producto-lista', descripcion]);
  // }

  // onSubmit(){
  //   //editar el producto
  //   this.irProductoLista();
  // }

  // guardarProducto(){
  //   this.ProductoServicio.guardarrProducto(this.descripcion, this.producto).subscribe(
  //     {
  //       next: (datos) => this.irProductoLista(),
  //       error: (errores) => console.log(errores)
  //     }
  //   );
  // }

  // irProductoLista(){
  //   this.enrutador.navigate(['/buscar-productos']);
  // }
}
