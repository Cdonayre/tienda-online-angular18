import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  productos: Producto []=[ 
    new Producto('Pantalón', 130.00),
    new Producto('Camisa', 80.00),
    new Producto('Polo', 50.00)
  ];
  
  agregarProducto(producto: Producto){ 
    this.productos.push(producto);
  }
}
