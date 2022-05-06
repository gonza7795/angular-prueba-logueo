import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000';



  constructor(
    private http: HttpClient) {}
   
  singin(user:any){
    return this.http.post(`${this.URL}/user/singin`,user);
  }

}