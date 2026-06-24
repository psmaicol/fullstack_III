import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = environment.url_inventario;

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  crearProducto(producto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, producto);
  }
}