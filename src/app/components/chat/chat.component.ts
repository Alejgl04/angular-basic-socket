import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public text: string = '';
  constructor(
    public chatService:ChatService
  ) { }

  ngOnInit(): void {
  
  }

  send( ): void {
    this.chatService.SendMessage( this.text );
    this.text = '';
  }
}
