import { Component, OnInit } from '@angular/core';
import { CargarProdService } from '../../../services/cargar-prod.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit{

cargarBebidas:any;
cargarVerduras:any;
cargarAlimNoP:any;
cargarPanificados:any;
cargarDulces:any;
cargarAseoPer:any;
cargarLimpieza:any;
  
  constructor(private servicioProducto:CargarProdService){}

  ngOnInit(): void {
   this.cargarProd();
   this.cargarProd2();
   this.cargarProd3();
   this.cargarProd4();
   this.cargarProd5();
   this.cargarProd6();
   this.cargarProd7();
  }


  cargarProd7() {
    this.servicioProducto.getProdlimpieza().subscribe(data => {
      this.cargarLimpieza = data;
    });
  }
  cargarProd6() {
    this.servicioProducto.getAseopersonal().subscribe(data => {
      this.cargarAseoPer = data;
    });
  }
  cargarProd5() { 
    this.servicioProducto.getDulces().subscribe(data => {
      this.cargarDulces = data;
    });
  }
  cargarProd4() {
    this.servicioProducto.getPanificados().subscribe(data => {
      this.cargarPanificados = data;
    });
  }
  cargarProd3() {
    this.servicioProducto.getAlimnop().subscribe(data => {
      this.cargarAlimNoP = data;
    });
  }
  cargarProd2() {
    this.servicioProducto.getVerduras().subscribe(data => {
      this.cargarVerduras = data;
    });
  }
  cargarProd() {
    this.servicioProducto.getBebidas().subscribe(data => {
      this.cargarBebidas = data;
    });
  }
  

  
 




}
