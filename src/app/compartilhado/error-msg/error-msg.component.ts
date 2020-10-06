import { Component } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent {
  static setError(arg0: string) {
    throw new Error('Method not implemented.');
  }
  public error: string;


setError(error: string, tempo: number = 7500) {
	this.error = error;
  setTimeout(() => {
this.error = null;}, tempo);}


}
