import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    public router: Router
  ){ }
  canActivate(route: ActivatedRouteSnapshot):boolean{
     const expectedRole = route.data['expectedRole'];
     const token = localStorage.getItem('token') as string;


      const {userName, roled} = (decode(token)) as any;
      console.log(roled);


     if( !this.authService.isAuth() || roled !== expectedRole){
    //  if( roled !== expectedRole){
        console.log('Usuario no autorizado para la vista');
       this.router.navigate(['login']);
        return false;


    

   

    
    
  }

  return true;
  
}

}