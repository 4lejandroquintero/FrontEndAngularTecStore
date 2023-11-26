import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/services/productos';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html'
})
export class EditarProductoComponent {
  producto: Producto = new Producto();
  id!: number;

  constructor(private productosServicio: ProductoService, private ruta: ActivatedRoute, private enrutador: Router){}

  ngOnInit(){
    // this.id = this.ruta.snapshot.params['id'];
    // this.productosServicio.obtenerPorudctoPorId(this.id).subscribe(
    //   {
    //     next: (datos) => this.producto = datos
    //     ,
    //     error: (errores: any) => console.log(errores)
    //   }
    // );
  }

  // onSubmit(){
  //   //editar el producto
  //   this.guardarProducto();
  // }

  // guardarProducto(){
  //   this.productosServicio.guardarrProducto(this.id, this.producto).subscribe(
  //     {
  //       next: (datos) => this.irProductoLista(),
  //       error: (errores) => console.log(errores)
  //     }
  //   );
  // }

  // irProductoLista(){
  //   this.enrutador.navigate(['/productos']);
  // }
}

