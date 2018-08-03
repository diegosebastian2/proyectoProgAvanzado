import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //datos;
  constructor(private http: HttpClient) {}

  getProductos(){
    let headersClient = new HttpHeaders();
    headersClient.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    return this.http.get('http://localhost:3000/',{headers:headersClient})
  }


}
