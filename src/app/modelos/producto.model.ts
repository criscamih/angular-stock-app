import { DecimalPipe } from '@angular/common';

export interface ProductoModel {
    id_producto: number;
    nombre: string;
    descripcion: string;
    valor: number;
    id_proveedor: number;
    id_tipo_producto: number;
}