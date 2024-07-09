import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

   login(username:string, password:string):boolean{
      if(username=="admin" && password=="admin123")
        return true;
      else
        return false;
   }
}
