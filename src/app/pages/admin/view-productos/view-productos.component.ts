import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-productos',
  templateUrl: './view-productos.component.html',
  styleUrls: ['./view-productos.component.css']
})
export class ViewProductosComponent implements OnInit {

  productos : any = [

  ]

  constructor(private productosService:ProductoService, private enrutador: Router) { }

  ngOnInit(): void {
    this.productosService.listarCuestionarios().subscribe(
      (dato:any) => {
        this.productos = dato;
        console.log(this.productos);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los productos','error');
      }
    )
  }

  eliminarProducto(productoId:any){
    Swal.fire({
      title:'Eliminar prodcuto',
      text:'¿Estás seguro de eliminar el producto?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.productosService.eliminarProducto(productoId).subscribe(
          (data) => {
            this.productos = this.productos.filter((producto:any) => producto.productoId != productoId);
            Swal.fire('Prodcuto eliminado','El producto ha sido eliminado de la base de datos','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar el producto','error');
          }
        )
      }
    })
  }
}
