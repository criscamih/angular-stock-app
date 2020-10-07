// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_detalle_inventario: 'http://localhost:3000/api/DetalleInventario/',
  url_areas: 'http://localhost:3000/api/Area/',
  url_empleados: 'http://localhost:3000/api/Empleado/',
  url_estados: 'http://localhost:3000/api/Estado/',
  url_productos: 'http://localhost:3000/api/Producto/',
  url_inventario: 'http://localhost:3000/api/Inventario/',
  url_tipo_producto: 'http://localhost:3000/api/TipoProducto/',
  url_proveedor: 'http://localhost:3000/api/Proveedor/',

  //-----depuración en local---
  // url_detalle_inventario: 'https://localhost:5001/api/DetalleInventario/',
  // url_areas: 'https://localhost:5001/api/Area/',
  // url_empleados: 'https://localhost:5001/api/Empleado/',
  // url_estados: 'https://localhost:5001/api/Estado/',
  // url_productos: 'https://localhost:5001/api/Producto/',
  // url_inventario: 'https://localhost:5001/api/Inventario/',
  // url_tipo_producto: 'https://localhost:5001/api/TipoProducto/',
  // url_proveedor: 'https://localhost:5001/api/Proveedor/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
