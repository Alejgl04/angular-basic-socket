import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserguardService } from './guards/userguard.service';
import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';

const routes: Routes = [
  
  { path:'', component: LoginComponent },
  { 
    path:'mensajes', 
    component: MessagesComponent,
    canActivate: [ UserguardService ]    
  },
  { path:'**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
