import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  precio=100;
  msj_precio="error";
  productos=[
    {id:1,nombre:"producto1"},
    {id:2,nombre:"producto2"},
    {id:3,nombre:"producto3"}
  ]
  
  calcular(){
    if(this.precio>=0){
      this.msj_precio="ok";
    }else{
      this.msj_precio="error";
    }

  
  }
 
}
