import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from './helper';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  constructor(private clienteHttp: HttpClient) { }

  obtenerProductosLista(): Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(`${baserUrl}/inventario-app/productos`);
  }

  agregarProducto(producto: Producto): Observable<Object>{
    return this.clienteHttp.post(`${baserUrl}/inventario-app/productos`, producto);
 }

 obtenerPorudctoPorId(id: number){
  return this.clienteHttp.get<Producto>(`${baserUrl}/inventario-app/productos/${id}`)
 }

 obtenerPorudctoPorCodigo(codigo: number){
  return this.clienteHttp.get<Producto>(`${baserUrl}/inventario-app/productos/${codigo}`)
 }

 guardarrProducto(id: number, producto: Producto): Observable<Object>{
  return this.clienteHttp.put(`${baserUrl}/inventario-app/productos/${id}`, producto);
 }

 eliminarProducto(id: number): Observable<Object>{
  return this.clienteHttp.delete(`${baserUrl}/inventario-app/productos/${id}`);
 }
}
