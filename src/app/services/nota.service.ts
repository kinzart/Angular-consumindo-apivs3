import { environment } from '../../environments/environment';
import { Pedidos } from './../interfaces/pedidos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotaService {

 apiUrl = environment.apiUrl;
 environment = this.apiUrl

  constructor(private http: HttpClient) { }

  getListaPedidos(): Observable<Pedidos[]> {
    const url = `${this.environment}/order`;
    return this.http.get<Pedidos[]>(url);

 }

 getOnePedido(client: string): Observable<Pedidos> {
    const url = `${this.environment}/order`;
    return this.http.get<Pedidos>(url);
 }

 addPedido(pedidos: Pedidos): Observable<Pedidos> {
    const url = `${this.environment}/order`;
    return this.http.post<Pedidos>(url, pedidos);

 }

 updatePedido(pedidos: Pedidos): Observable<Pedidos> {
    const url = `${this.environment}/order`;
    return this.http.put<Pedidos>(url, pedidos);
 }

 deletePedido(client: string): Observable<Pedidos> {
    const url = `${this.environment}/order`;
    return this.http.delete<Pedidos>(url);
 }
}
