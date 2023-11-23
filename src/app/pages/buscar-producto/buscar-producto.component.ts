import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/services/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {

  producto: Producto = new Producto();
  descripcion!: string;



  constructor(private ProductoServicio: ProductoService, private ruta: ActivatedRoute, private enrutador: Router){}

  ngOnInit(){
    this.descripcion = this.ruta.snapshot.params['descripcion'];
    this.ProductoServicio.obtenerPorudctoPorDescripcion(this.descripcion).subscribe(
      {
        next: (datos) => this.producto = datos
        ,
        error: (errores: any) => console.log(errores)
      }
    );
  }
  editarProductoDescripcion(descripcion: string){
    this.enrutador.navigate(['producto-lista', descripcion]);
  }

  onSubmit(){
    //editar el producto
    this.irProductoLista();
  }

  // guardarProducto(){
  //   this.ProductoServicio.guardarrProducto(this.descripcion, this.producto).subscribe(
  //     {
  //       next: (datos) => this.irProductoLista(),
  //       error: (errores) => console.log(errores)
  //     }
  //   );
  // }

  irProductoLista(){
    this.enrutador.navigate(['/buscar-productos']);
  }
}
