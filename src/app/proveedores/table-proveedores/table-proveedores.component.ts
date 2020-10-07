import { Component, OnInit, Input } from '@angular/core';
import {ProveedorModel} from '../../modelos/proveedor.model';
@Component({
  selector: 'app-table-proveedores',
  templateUrl: './table-proveedores.component.html',
  styleUrls: ['./table-proveedores.component.scss']
})
export class TableProveedoresComponent implements OnInit {

  @Input() proveedores: ProveedorModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
