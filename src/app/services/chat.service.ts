import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService:WebsocketService
  ) { }

  SendMessage( message: string ) {
    const payload = {
      de: this.wsService.getUsername().name,
      body: message
    };
    this.wsService.sendEmit( 'message', payload )
  }
  
  getMessages() {
    return this.wsService.listen('new-message');
  }

  getPrivateMessages() {
    return this.wsService.listen( 'private-message' );
  }
}
