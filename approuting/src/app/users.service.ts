import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public nombre;
  public apellido;
  public email;
  public pass;
  constructor() { }

  createUser(values){
    /*values.nombre = nombre;
    values.apellido = apellido;
    values.email = email;
    values.pass = pass;*/

    console.log(values);
    //return[this.nombre, this.apellido, this.email, this.pass];

  }
}
