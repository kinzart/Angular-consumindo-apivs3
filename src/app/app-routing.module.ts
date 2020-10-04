import { ListaPedidosComponent } from './paginas/lista-pedidos/lista-pedidos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPedidoComponent } from './paginas/criar-pedido/criar-pedido.component';

const routes: Routes = [
  { path: '', component: ListaPedidosComponent},
  { path: 'pedidos/criar', component: CriarPedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
