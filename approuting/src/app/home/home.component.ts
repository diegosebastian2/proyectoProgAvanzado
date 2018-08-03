import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  public productos;
  public heroes;

  constructor(public productoss: ProductosService) {
    this.heroes=[
        {id:2, name:'Batman'},
        {id:5, name:'BatGirl'},
        {id:1, name:'Superman'},
        {id:3, name:'Robin'},
        {id:4, name:'Flash'}
    ];
/*
    this.productoss.getProductos().subscribe(data=>{
      this.productos = data;
      console.log(this.productos);
    });
*/


   }

  ngOnInit() {
  }

}
