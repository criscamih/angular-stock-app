import { AreaModel } from './area.model';

export interface StockModel{
    id_inventario: number;
    codigo_serial: string;
    fecha: Date;
    observaciones: string;
    id_producto: number;
    id_empleado: number;
    id_area: number;
    id_estado: number;
}