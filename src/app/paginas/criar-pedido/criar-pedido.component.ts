import { NotaService } from './../../services/nota.service';
import { ErrorMsgComponent } from './../../compartilhado/error-msg/error-msg.component';
import { Pedidos } from './../../interfaces/pedidos';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.css']
})
export class CriarPedidoComponent  {

  @ViewChild(ErrorMsgComponent) errorMsg: ErrorMsgComponent;

  constructor(private notaSvc: NotaService, private router: Router) { }

  addPedido(pedido: Pedidos) {
    this.notaSvc.addPedido(pedido)
    .subscribe(
      () => { this.router.navigateByUrl('/'); },
      () => { this.errorMsg.setError('Falha na tentativa de adicionar pedido.');}
    );
  }

}
