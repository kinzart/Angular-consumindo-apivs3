import { NotaService } from './../../services/nota.service';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Pedidos } from './../../interfaces/pedidos';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  public pedidos: Pedidos[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent : ErrorMsgComponent;
  constructor(private notaSvc: NotaService) { }

  ngOnInit(): void {
    this.getListaPedidos();
  }

getListaPedidos() {
  this.notaSvc.getListaPedidos()
  .subscribe((pedidos: Pedidos[]) => {
    this.pedidos = pedidos;
  }, () => { this.errorMsgComponent.setError('Falha na tentativa de buscar os pedidos'); });
 }


deletePedido(_id: any) {
  this.notaSvc.deletePedido(_id)
  .subscribe(() => {
    this.getListaPedidos();
  }, () => { this.errorMsgComponent.setError('Falha na tentativa de deletar o pedido'); });
 }


existemPedidos() {
  return this.pedidos && this.pedidos.length > 0;
}
}
