import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {

  productoId:any;
  producto:any = new Object();

  constructor(
    private productoService:ProductoService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.productoId = this.route.snapshot.params['productoId'];
    this.productoService.obtenerProducto(this.productoId).subscribe(
      (data:any) => {
        console.log(data);
        this.producto = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  verProducto(){
    Swal.fire({
      title:'¿Estar de acuerdo con las instrucciones de compra?',
      showCancelButton:true,
      cancelButtonText:'No',
      confirmButtonText:'Si',
      icon:'info'
    }).then((result:any) => {
      if(result.isConfirmed){
        this.router.navigate(['/start/'+this.productoId]);
      }
    })
  }

}
