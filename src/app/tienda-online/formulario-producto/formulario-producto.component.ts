import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {

  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto=new EventEmitter<Producto>();
  
 agregarProducto(evento: Event){

  evento.preventDefault();

  if(this.descripcionInput.nativeElement.value.trim() === '' || this.precioInput === null || this.precioInput.nativeElement.value < 0){
    console.log("Debe ingresar una descripcion y un precio válido");
    return;
  }

  const producto = new Producto(this.descripcionInput.nativeElement.value, this.precioInput.nativeElement.value);
  this.nuevoProducto.emit(producto);

  this.descripcionInput.nativeElement.value = '';
  this.precioInput.nativeElement.value = null;
 }

}
