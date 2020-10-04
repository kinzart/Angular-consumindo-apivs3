import { Pedidos } from './../../interfaces/pedidos';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})
export class FormPedidoComponent {
  @Input() pedido: Pedidos = <Pedidos>{};
  @Output() outputPedido: EventEmitter<Pedidos> = new EventEmitter();

  onSubmit() {
    this.outputPedido.emit(this.pedido);
  }


}
