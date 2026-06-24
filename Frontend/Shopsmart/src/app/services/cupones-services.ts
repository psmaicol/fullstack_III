import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuponService {
  private apiUrl = environment.url_cupones;

  constructor(private http: HttpClient) {}

  obtenerCupones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  validarCupon(codigo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/validar/${codigo}`);
  }
}