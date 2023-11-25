import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/services/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-comprar-producto',
  templateUrl: './comprar-producto.component.html',
  styleUrls: ['./comprar-producto.component.css']
})
export class ComprarProductoComponent implements OnInit {
  producto: Producto = new Producto();
  id!: number;

  constructor(private ProductoServicio: ProductosService, private ruta: ActivatedRoute, private enrutador: Router){}

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.ProductoServicio.obtenerPorudctoPorId(this.id).subscribe(
      {
        next: (datos) => this.producto = datos
        ,
        error: (errores: any) => console.log(errores)
      }
    );
  }

  onSubmit(){
    //editar el producto
    this.guardarProducto();
  }

  guardarProducto(){
    this.ProductoServicio.guardarrProducto(this.id, this.producto).subscribe(
      {
        next: (datos) => this.irProductoLista(),
        error: (errores) => console.log(errores)
      }
    );
  }

  irProductoLista(){
    this.enrutador.navigate(['/productos']);
  }
}
