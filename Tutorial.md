<h1>Tutorial</h1>


1 - ng n <appName>


2 - ng g interface interfaces/pedidos
	//Pedidos = name of schema, any...

3- into interfaces/pedidos:

        export interface Pedidos {
        _id: string;	
        client: string;
        address: string;
        contact: string;
        order: string;	

        }

4 - ng g s services/nota


5 - into environment.ts:
	
        apiUrl: 'http://suaapi.com';




6- into app.module:

        imports: HttpClientModule,


7 - into services/nota

      import {environment} from '../../environemnts/environment';
      import {HttpClient} from '@angular/common/http';
      import {Observable} from 'rxjs';
      import {Pedidos} from '../interfaces/Pedidos';



      constructor(private http: HttpClient) { }



        getList(): Observable<Pedidos[]> {
          const url = `${enviromnent,apiUrl}/endpoint`;
          return this.http.get<Pedidos[]>(url);

        }

        getOne(id: number): Observable<Pedidos> {
          const url = `${environment,apiUrl}/endpoint`;
          return this.http.get<Pedidos>(url);
        }

        addOne(Pedidos: Pedidos): Observable<Pedidos> {
          const url = `${environment,apiUrl}/endpoint`;
          return this.http.post<Pedidos>(url, Pedidos);

        }

        UpdateOne(Pedidos: Pedidos): Observable<Pedidos> {
          const url = `${environment,apiUrl}/endpoint`;
          return this.http.put<Pedidos>(url, Pedidos);
        }

        DeleteOne(id: number): Observable<Pedidos> {
          const url = `${environment,apiUrl}/endpoint`;
          return this.http.delete<Pedidos>(url);
        }




8 - Add bootstrap cdn in index.html



9 - add in app.component.html (after delete all and leave <router-outlet>):


      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" routerLink="">{{ title }}</a>
      </nav>
      <router-outlet></router-outlet>


10 - ng g c compartilhado/error-msg


11 - into error-msg.component.ts:
	//delete ngOnInit() on all component
        
      public error: string;
	

      setError(error: string, tempo: number = 5000) {
        this.error = error;
        setTimeout(() => {
        this.error = null;}, tempo);}




12 - into error-msg.component.html:


      <div class="alert alert-danger" *ngIf="error">
        {{ error }}
      </div>



13 - into app.component.html (Main View):
    
    <app-error-msg></app-error-msg>


14 - into app.component.ts:

    import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
    import { Component, ViewChild, OnInit } from '@angular/core';


    export class AppComponent implements OnInit {
      title = 'choose your title here'
      @ViewChild(ErrorMsgComponent) ErrorMsgComponent: ErrorMsgComponent;
      
      ngOnInit() {
        this.errorMsgComponent.setError('This is a error mensage!')
    }


15 - ng g c paginas/lista-pedidos    
// pedidos = Your App Name



16 - into app-routing.module.ts:


      { path: '', component: Listapedidos }



17 - Into lista-pedidos.components.ts:

import <ViewChild>, <Interface>, <service> and <errorMsgComponent>





20 - ng g c compartilhado/form-pedido



22 - add FormsModule in app.module.ts


23 - add form html on form-pedido-component.html


24 - ng g c paginas/criar-pedido



26 - create a form 


27 - into app.routing.module.ts:


    { path: 'pedidos/criar', component: CriarPedidoComponent}

	

