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
  messages: any[] = [];
  element!: HTMLElement | any;

  constructor(
    public chatService:ChatService
  ) { }

  ngOnInit(): void {
    this.element = document.getElementById('chat-messages');
    this.subscriptionMessages = this.chatService.getMessages().subscribe( msg => {

      this.messages.push( msg );
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);

    });
  }

  ngOnDestroy(): void {
    this.subscriptionMessages.unsubscribe();
  }

  send( ): void {
    if ( this.text.trim( ).length == 0) { return; }
    this.chatService.SendMessage( this.text );
    this.text = '';
  }
}
