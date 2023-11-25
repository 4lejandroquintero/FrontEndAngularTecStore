import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/services/productos';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-producto-inventarios',
  templateUrl: './view-producto-inventarios.component.html',
  styleUrls: ['./view-producto-inventarios.component.css']
})
export class ViewProductoInventariosComponent implements OnInit {

  productoId:any;
  codigo:any;
  productos:any = [];

  constructor(private route:ActivatedRoute,private productosService:ProductosService,private snack:MatSnackBar, private enrutador: Router) { }

  ngOnInit(): void {
    this.productoId = this.route.snapshot.params['productoId'];
    this.codigo = this.route.snapshot.params['codigo'];
    this.productosService.listarProductosDelInventario(this.productoId).subscribe(
      (data:any) => {
        console.log(data);
        this.productos = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  private obtenerProductos(){
    //Consumir los datos del observable (suscribirnos)
    this.productosService.obtenerProductosLista().subscribe(
      (datos => {
        this.productos = datos;
      })
    );
  }

  editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id]);
  }

  buscarProductoPorDescripcion(descripcion: string){
    this.enrutador.navigate(['buscar-producto', descripcion]);
  }



  eliminarProducto(preguntaId:any){
    Swal.fire({
      title:'Eliminar producto de esta categoria',
      text:'¿Estás seguro , quieres eliminar este producto?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((resultado) => {
      if(resultado.isConfirmed){
        this.productosService.eliminarProducto(preguntaId).subscribe(
          (data) => {
            this.snack.open('Pregunta eliminada','',{
              duration:3000
            })
            this.productos = this.productos.filter((pregunta:any) => pregunta.preguntaId != preguntaId);
          },
          (error) => {
            this.snack.open('Error al eliminar la pregunta','',{
              duration:3000
            })
            console.log(error);
          }
        )
      }
    })
  }
}





//   productoId:any;
//   codigo:any;
//   productos:any = [];

//   constructor(private route:ActivatedRoute,private productosService:ProductosService,private snack:MatSnackBar) { }

//   ngOnInit(): void {
//     this.productoId = this.route.snapshot.params['productoId'];
//     this.codigo = this.route.snapshot.params['codigo'];
//     this.productosService.listarProductosDelInventario(this.productoId).subscribe(
//       (data:any) => {
//         console.log(data);
//         this.productos = data;
//       },
//       (error) => {
//         console.log(error);
//       }
//     )
//   }

//   eliminarProducto(preguntaId:any){
//     Swal.fire({
//       title:'Eliminar producto',
//       text:'¿Estás seguro , quieres eliminar este producto?',
//       icon:'warning',
//       showCancelButton:true,
//       confirmButtonColor:'#3085d6',
//       cancelButtonColor:'#d33',
//       confirmButtonText:'Eliminar',
//       cancelButtonText:'Cancelar'
//     }).then((resultado) => {
//       if(resultado.isConfirmed){
//         this.productosService.eliminarProducto(this.productoId).subscribe(
//           (data) => {
//             this.snack.open('Pregunta eliminada','',{
//               duration:3000
//             })
//             this.productos = this.productos.filter((pregunta:any) => pregunta.preguntaId != preguntaId);
//           },
//           (error) => {
//             this.snack.open('Error al eliminar el producto','',{
//               duration:3000
//             })
//             console.log(error);
//           }
//         )
//       }
//     })
//   }
// }
