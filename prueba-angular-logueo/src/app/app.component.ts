import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-angular-logueo';


  logOut(){

    console.log("borrada la sesion");
    localStorage.removeItem('token');
    window.location.href = 'login';

    
    }



}
