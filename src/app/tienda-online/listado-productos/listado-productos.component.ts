import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent implements OnInit{

  productos: Producto []=[];
  constructor(private productoService: ProductoService) { }
  ngOnInit(): void {
    this.productos = this.productoService.productos;

  }
}
