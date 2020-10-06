import { NotaService } from './../../services/nota.service';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Pedidos } from './../../interfaces/pedidos';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent {
  public pedido: Pedidos;
  @ViewChild(ErrorMsgComponent) errorMsg: ErrorMsgComponent;

  constructor(private notaSvc: NotaService,
    private activetedRoute: ActivatedRoute,
    private router: Router) {
       this.getOnePedido(this.activetedRoute.snapshot.params._id)
     }

getOnePedido(_id: any) {
  this.notaSvc.getOnePedido(_id)
  .subscribe((pedido: Pedidos) => {
    console.log('Estamos editando: ', _id)
    this.pedido = pedido;
  }, () => { this.errorMsg.setError('Falha ao identificar pedido'); });
}

updatePedido(pedido: Pedidos) {
  this.notaSvc.updatePedido(pedido)
  .subscribe(
    () => { this.router.navigateByUrl('/');},
    () => { this.errorMsg.setError('Falha ao atualizar o pedido'); });
}
}
