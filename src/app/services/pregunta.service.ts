import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http:HttpClient) { }

  public listarPreguntasDelProducto(productoId:any){
    return this.http.get(`${baserUrl}/pregunta/producto/todos/${productoId}`);
  }

  public guardarPregunta(pregunta:any){
    return this.http.post(`${baserUrl}/pregunta/`,pregunta);
  }

  public eliminarPregunta(preguntaId:any){
    return this.http.delete(`${baserUrl}/pregunta/${preguntaId}`);
  }

  public actualizarPregunta(pregunta:any){
    return this.http.put(`${baserUrl}/pregunta/`,pregunta);
  }

  public obtenerPregunta(preguntaId:any){
    return this.http.get(`${baserUrl}/pregunta/${preguntaId}`);
  }

  public listarPreguntasDelProductoParaLaPrueba(productoId:any){
    return this.http.get(`${baserUrl}/pregunta/examen/todos/${productoId}`);
  }

  public evaluarProducto(preguntas:any){
    return this.http.post(`${baserUrl}/pregunta/evaluar-producto`,preguntas);
  }
}

