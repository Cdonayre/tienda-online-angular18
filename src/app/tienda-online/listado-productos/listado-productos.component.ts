import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../producto.service';
import FormularioProductoComponent from '../formulario-producto/formulario-producto.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export default class ListadoProductosComponent implements OnInit{

  
  productos: Producto []=[];
  constructor(private productoService: ProductoService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.productos = this.productoService.productos;
  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }
}
