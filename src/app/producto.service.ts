import { Injectable } from '@angular/core';
import { Producto } from './tienda-online/producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //id Var
  private idSiguiente=1;

  productos:Producto[]=[];
  constructor(){
    //initialize products
    this.inicializarProductos();
  }

  private inicializarProductos(){
    const producto1= new Producto(this.idSiguiente++, 'Patalón', 130.00);
    const producto2= new Producto(this.idSiguiente++, 'Camisa', 80.00);
    const producto3= new Producto(this.idSiguiente++, 'Polo', 50.00);
    //add products to Product[]
    this.productos.push(producto1,producto2,producto3);
  }

  guardarProducto(producto: Producto){ 
    if(producto.id === null){
      producto.id == this.idSiguiente++;
      this.productos.push(producto);
    }
    else{
      //if the product has an idd then it updates
      const indice = this.productos.findIndex(p=>p.id ===producto.id);
      if(indice !== -1){
        this.productos[indice]= producto;
      }
    }
  }

  getProductoById(id:number):Producto | undefined{
    return this.productos.find(producto => producto.id === id);
  }
}
