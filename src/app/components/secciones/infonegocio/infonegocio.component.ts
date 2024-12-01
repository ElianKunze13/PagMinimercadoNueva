import { Component, OnInit } from '@angular/core';
import { CargarinfoService } from '../../../services/cargarinfo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infonegocio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infonegocio.component.html',
  styleUrl: './infonegocio.component.css'
})
export class InfonegocioComponent implements OnInit{
  
  info1:any;


  constructor(private servicioInformacion: CargarinfoService){}

  ngOnInit(): void {
    this.cargarInfo();
  }
  cargarInfo() {
    this.servicioInformacion.getInfoEmpresa().subscribe(info => {
      this.info1 = info;
    });
  }

}
