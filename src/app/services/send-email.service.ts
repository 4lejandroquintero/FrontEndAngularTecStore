import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../models/helper';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  public loginStatusSubjec = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  obtenerUsuarioPorNombreUsuario(username: string): Observable<any> {
    const url = `${baserUrl}/usuarios/${username}`;
    return this.http.get(url);
  }

  recuperarClave(datosRecuperacion: any): Observable<any> {
    const url = `${baserUrl}/usuarios/recuperar-clave`;
    return this.http.post(url, datosRecuperacion);
  }
}

