import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaPedidosComponent } from './paginas/lista-pedidos/lista-pedidos.component';
import { FormPedidoComponent } from './compartilhado/form-pedido/form-pedido.component';
import { FormsModule } from '@angular/forms';
import { CriarPedidoComponent } from './paginas/criar-pedido/criar-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaPedidosComponent,
    FormPedidoComponent,
    CriarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
