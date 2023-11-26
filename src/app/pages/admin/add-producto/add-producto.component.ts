import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  categoria:any = [];

  productosData = {
    codigo:'',
    descripcion:'',
    precio:'',
    existencia:'',
    activo:true,
    categoria:{
      categoriaId:''
    }
  }

  constructor(
    private categoriaService:CategoriaService,
    private snack:MatSnackBar,
    private productosService:ProductoService,
    private router:Router) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categoria = dato;
        console.log(this.categoria);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )
  }

  guardarCuestionario(){
    console.log(this.productosData);
    if(this.productosData.codigo.trim() == '' || this.productosData.codigo == null){
      this.snack.open('El codigo es requerido','',{
        duration:3000
      });
      return ;
    }

    this.productosService.agregarProducto(this.productosData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Producto guardado','El Producto ha sido guardado con éxito','success');
        this.productosData = {
          codigo : '',
          descripcion : '',
          precio : '',
          existencia : '',
          activo:true,
          categoria:{
            categoriaId:''
          }
        }
        this.router.navigate(['/admin/productos']);
      },
      (error) => {
        Swal.fire('Error','Error al guardar el producto','error');
      }
    )
  }

}
