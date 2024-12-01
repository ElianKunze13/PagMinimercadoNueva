import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CargarProdService {

private jsonUrl="data/bebidas.json"
private jsonUrl1="data/verduras.json"
private jsonUrl2="data/alimnop.json"
private jsonUrl3="data/aseopersonal.json"
private jsonUrl4="data/dulces.json"
private jsonUrl5="data/panificados.json"
private jsonUrl6="data/prodlimpieza.json"

  // Constructor que recibe HttpClient para hacer peticiones HTTP
  constructor(private http:HttpClient) { 
   this.getBebidas();
   this.getVerduras();
   this.getAlimnop();
   this.getAseopersonal();
   this.getDulces();
   this.getPanificados();
   this.getProdlimpieza();
  }

  getProdlimpieza():Observable<Producto> {
    return this.http.get<Producto>(this.jsonUrl6);
  }
  getPanificados():Observable<Producto> {
    return this.http.get<Producto>(this.jsonUrl5);
  }
  getDulces():Observable<Producto> {
    return this.http.get<Producto>(this.jsonUrl4);
  }
  getAseopersonal():Observable<Producto> {
    return this.http.get<Producto>(this.jsonUrl3);
  }
  getAlimnop():Observable<Producto> {
    return this.http.get<Producto>(this.jsonUrl2);
  }
  getVerduras():Observable<Producto> {
    return this.http.get<Producto>(this.jsonUrl1);
  }
  getBebidas():Observable<Producto> {
    return this.http.get<Producto>(this.jsonUrl);
  }
  




}

