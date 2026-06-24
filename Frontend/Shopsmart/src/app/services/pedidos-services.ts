import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = environment.url_pedidos;

  constructor(private http: HttpClient) {}

  obtenerPedidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  crearPedido(pedido: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, pedido);
  }
}