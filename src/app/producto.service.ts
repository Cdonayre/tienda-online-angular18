import { Injectable } from '@angular/core';
import { Producto } from './tienda-online/producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: Producto []=[ 
    new Producto('Pantalón', 130.00),
    new Producto('Camisa', 80.00),
    new Producto('Polo', 50.00)
  ];
  constructor() { }

  agregarProducto(producto: Producto){ 
    this.productos.push(producto);
  }
}
