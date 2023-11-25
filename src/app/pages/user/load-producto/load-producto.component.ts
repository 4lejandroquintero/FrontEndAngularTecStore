import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-load-producto',
  templateUrl: './load-producto.component.html',
  styleUrls: ['./load-producto.component.css']
})
export class LoadProductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
