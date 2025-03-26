import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../producto.service';
import FormularioProductoComponent from '../formulario-producto/formulario-producto.component';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export default class ListadoProductosComponent implements OnInit{

  
  productos: {[llave:string]:Producto}={};
  productosSubscripcion: Subscription | null = null;
  constructor(private productoService: ProductoService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.cargarProductos();

    //listen to changes in lista-productos
    this.productoService.listarProductos().subscribe((productos: {[llave:string]:Producto})=>{
      this.productos=productos;
      this.productoService.setProductos(productos);
    })
  }

  cargarProductos(){
    return this.productoService.listarProductos().subscribe((productos: {[llave:string]:Producto})=>{
      this.productos=productos;
    })
  }

  obtenerLlaves():string[]{ 
    if(this.productos){
      return Object.keys(this.productos);
    }
    return [];
}

  agregarProducto(){
    this.router.navigate(['agregar']);
  }

  ngOnDestroy():void{
    if(this.productosSubscripcion != null){
      this.productosSubscripcion.unsubscribe();
    }
  }
}
