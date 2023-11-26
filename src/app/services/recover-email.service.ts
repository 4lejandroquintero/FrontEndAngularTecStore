import { EmailValuesDTO } from './EmailValuesDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoverEmailService {

  constructor(private http:HttpClient) { }

  public enviarEmail(){
    return this.http.post(`${baserUrl}/email/send-html`,EmailValuesDTO);
  }


}
