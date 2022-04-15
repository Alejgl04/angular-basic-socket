import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus: boolean = false;
  public username!: User;
  constructor(
    private socket: Socket
  ) { 
    this.checkStatus();
    this.getStorage();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('desconectado al servidor');
      this.socketStatus = false;
    });
  }

  sendEmit( event: string, payload?: any, callback?: Function  ) {
    console.log('Emitiendo', event);
    this.socket.emit( event, payload, callback );
  }

  listen( event: string ) {
    return this.socket.fromEvent( event );
  }

  loginWs( name: string ) {

    return new Promise<void>( ( resolve, reject ) => {
        this.sendEmit( 'config-user', { name }, (resp: any) => {
          this.username = new User( name );
          this.setStorage();
          resolve();
        });
    });
  }

  getUsername() {
    return this.username;
  }

  setStorage(): void {
    localStorage.setItem( 'username', JSON.stringify( this.username ));
  }

  getStorage() {
    if( localStorage.getItem( 'username' ) ) {
      this.username = JSON.parse( localStorage.getItem( 'username')  || '{}');
      this.loginWs( this.username.name );
    }
  }

}
