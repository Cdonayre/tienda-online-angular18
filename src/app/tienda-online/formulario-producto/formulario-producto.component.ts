import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {

  descripcionInput: string = '';
  precioInput: number | null = null;
  constructor(private productoService: ProductoService) { }
  agregarProducto(evento: Event){
  evento.preventDefault();

  if(this.descripcionInput.trim() === '' || this.precioInput === null || this.precioInput < 0){
    console.log("Debe ingresar una descripcion y un precio válido");
    return;
  }

  const producto = new Producto(this.descripcionInput, this.precioInput);

  this.productoService.agregarProducto(producto);

  this.descripcionInput = '';
  this.precioInput = null;
 }

}
