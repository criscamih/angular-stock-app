import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {DetalleInventarioModel} from '../../modelos/detalle_inventario.model';

@Component({
  selector: 'app-table-inventarios',
  templateUrl: './table-inventarios.component.html',
  styleUrls: ['./table-inventarios.component.scss']
})
export class TableInventariosComponent implements OnInit {
  @Input() inventarios: DetalleInventarioModel[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
