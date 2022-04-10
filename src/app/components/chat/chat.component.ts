import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  public text: string = '';
  subscriptionMessages!: Subscription;

  constructor(
    public chatService:ChatService
  ) { }

  ngOnInit(): void {
    this.subscriptionMessages = this.chatService.getMessages().subscribe( msg => {
      console.log( msg );
    });
  }

  ngOnDestroy(): void {
    this.subscriptionMessages.unsubscribe();
  }

  send( ): void {
    this.chatService.SendMessage( this.text );
    this.text = '';
  }
}
