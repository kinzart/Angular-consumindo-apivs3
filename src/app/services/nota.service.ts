import { Pedidos } from './../interfaces/pedidos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NotaService {

 //apiLocal = 'http://localhost:3000';
 apiUrl = environment.apiUrl;
 environment = this.apiUrl


  constructor(private http: HttpClient) { }

  getListaPedidos(): Observable<Pedidos[]> {
    const url = `${this.environment}/order`;
    return this.http.get<Pedidos[]>(url);

 }

 getOnePedido(_id: object): Observable<Pedidos> {
    const url = `${this.environment}/order`;
    return this.http.get<Pedidos>(url, _id);
 }

 addPedido(pedidos: Pedidos): Observable<Pedidos> {
    const url = `${this.environment}/order`;
    return this.http.post<Pedidos>(url, pedidos);

 }

 updatePedido(pedidos: Pedidos): Observable<Pedidos> {
    const url = `${this.environment}/order`;
    return this.http.put<Pedidos>(url, pedidos);
 }

 deletePedido(_id: object): Observable<Pedidos> {
    const url = `${this.environment}/order`;
    return this.http.delete<Pedidos>(url);
 }
}
