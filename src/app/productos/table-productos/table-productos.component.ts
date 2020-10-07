import { Component, OnInit, Input } from '@angular/core';
import {ProductoModel} from '../../modelos/producto.model';
@Component({
  selector: 'app-table-productos',
  templateUrl: './table-productos.component.html',
  styleUrls: ['./table-productos.component.scss']
})
export class TableProductosComponent implements OnInit {

  @Input() productos: ProductoModel[];
  constructor() { }

  ngOnInit(): void {
  }


}
