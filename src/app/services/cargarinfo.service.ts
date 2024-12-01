import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informacion } from '../models/informacion';

@Injectable({
  providedIn: 'root'
})
export class CargarinfoService {

  private jsonUrl = "data/infoEmpresa.json";
private jsonUrl2="data/preguntasFrec.json";


  constructor(private http:HttpClient) { 
this.getInfoEmpresa();
this.getPreguntasFrec();
  }
  
  getPreguntasFrec():Observable<Informacion> {
    return this.http.get<Informacion>(this.jsonUrl2);  
  }
  getInfoEmpresa():Observable<Informacion>{
    return this.http.get<Informacion>(this.jsonUrl);
  }
}
