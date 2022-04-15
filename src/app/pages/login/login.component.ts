import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = "";
  public user: User = User;

  constructor(
    public wsService:WebsocketService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.wsService.loginWs( this.name )
    .then( () => {
      this.router.navigateByUrl('/mensajes');
    })
    .catch( () => {
      return;
    })
    
  }

}
