import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';
import { Producto } from './productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  public listarProductos()/*: Observable<Producto[]>*/{
    return this.http.get/*<Producto[]>*/(`${baserUrl}/inventario-app/productos`);
  }

  public listarProductosDelInventario(productoId:any)/*: Observable<Producto[]>*/{
    return this.http.get/*<Producto[]>*/(`${baserUrl}/inventario-app/productos/${productoId}`);
  }

  public agregarProducto(producto:any){
    return this.http.post(`${baserUrl}/inventario-app/productos`,producto);
  }

  public eliminarProducto(productoId:any){
    return this.http.delete(`${baserUrl}/inventario-app/productos/${productoId}`);
  }

  obtenerProductosLista(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${baserUrl}/inventario-app/productos`);
  }


  public obtenerProducto(productoId:any){
    return this.http.get(`${baserUrl}/producto/${productoId}`);
  }

  obtenerPorudctoPorCodigo(codigo: string){
    return this.http.get<Producto>(`${baserUrl}/inventario-app/productos/${codigo}`)
   }

  public actualizarProducto(producto:any){
    return this.http.put(`${baserUrl}/producto/`,producto);
  }

  public listarProductosDeUnaCategoria(productoId:any){
    return this.http.get(`${baserUrl}/producto/categoria/${productoId}`);
  }

  // public obtenerProductosActivos(){
  //   return this.http.get(`${baserUrl}/producto/activo`);
  // }

  public obtenerProductosActivosDeUnaCategoria(categoriaId:any){
    return this.http.get(`${baserUrl}/producto/categoria/activo/${categoriaId}`);
  }

  guardarrProducto(id: number, producto: Producto): Observable<Object>{
    return this.http.put(`${baserUrl}/inventario-app/productos/${id}`, producto);
   }

   obtenerPorudctoPorDescripcion(descripcion: string){
    return this.http.get<Producto>(`${baserUrl}/inventario-app/productos/${descripcion}`)
   }

   obtenerPorudctoPorId(id: number){
    return this.http.get<Producto>(`${baserUrl}/inventario-app/productos/${id}`)
   }












}
