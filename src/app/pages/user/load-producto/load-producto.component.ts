import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-load-producto',
  templateUrl: './load-producto.component.html',
  styleUrls: ['./load-producto.component.css']
})
export class LoadProductoComponent implements OnInit {

  catId:any;
  productos:any;

  constructor(
    private route:ActivatedRoute,
    private productoService:ProductoService
  ) { }

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

}

