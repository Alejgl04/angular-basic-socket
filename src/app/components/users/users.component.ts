import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersActiveObs?: Observable<any>;
  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.usersActiveObs = this.chatService.getUsersActive();
    this.chatService.emitUserActive();
  }

}
