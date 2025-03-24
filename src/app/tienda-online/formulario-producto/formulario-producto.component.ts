import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../producto.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export default class FormularioProductoComponent {

  productoId:number | null=null;
  descripcionInput: string = '';
  precioInput: number | null = null;
  constructor(private productoService: ProductoService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const producto= this.productoService.getProductoById(Number(id));
      if(producto){
        //if it finds the product then push to formulario
        this.productoId = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio; 
      }
    }
  }
  
  guardarProducto(evento: Event){
  evento.preventDefault();

  if(this.descripcionInput.trim() === '' || this.precioInput === null || this.precioInput < 0){
    console.log("Debe ingresar una descripcion y un precio válido");
    return;
  }

  const producto = new Producto(this.productoId,this.descripcionInput, this.precioInput);

  this.productoService.guardarProducto(producto);

  //Clean parameters 
  this.productoId=null;
  this.descripcionInput = '';
  this.precioInput = null;
  //redirect to default link
  this.router.navigate(['/']);
 }

 cancelar(){
  this.router.navigate(['/']);
 }

}
