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
        de: 'Fernando',
        body: message
      };
      this.wsService.sendEmit( 'message', payload )
    }

}
