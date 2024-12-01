import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CargarinfoService } from '../../../services/cargarinfo.service';

@Component({
  selector: 'app-preguntasfrec',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preguntasfrec.component.html',
  styleUrl: './preguntasfrec.component.css'
})
export class PreguntasfrecComponent implements OnInit {

info2:any;

  constructor(private servicioInformacion:CargarinfoService) {
  }

  ngOnInit(): void {
   this.cargarInfo(); 

  }
  cargarInfo() {
    this.servicioInformacion.getPreguntasFrec().subscribe(info => this.info2 = info);
  }

}
