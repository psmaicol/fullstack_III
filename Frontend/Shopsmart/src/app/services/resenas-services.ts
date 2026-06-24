import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {
  private apiUrl = environment.url_resenas;

  constructor(private http: HttpClient) {}

  obtenerResenas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  crearResena(resena: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, resena);
  }
}