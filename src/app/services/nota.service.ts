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

 getOnePedido(_id: any): Observable<Pedidos> {
    const url = `${this.environment}/order/${_id}`;
    console.log(`Peguei o id: ${_id}`);
    return this.http.get<Pedidos>(url);
 }

 addPedido(pedidos: Pedidos): Observable<Pedidos> {
    const url = `${this.environment}/order`;
    console.log(`Adicionamos o pedido: ${pedidos}`);
    return this.http.post<Pedidos>(url, pedidos);

 }

 updatePedido(pedidos: Pedidos): Observable<Pedidos> {
    const url = `${this.environment}/order/${pedidos._id}`;
    console.log(`Atualizando o pedido: ${pedidos._id}`);
    return this.http.put<Pedidos>(url, pedidos);
 }

 deletePedido(_id: any): Observable<Pedidos> {
    const url = `${this.environment}/order/${_id}`;
    console.log(`Apagando o pedido: ${_id}`);
    return this.http.delete<Pedidos>(url);
 }
}
