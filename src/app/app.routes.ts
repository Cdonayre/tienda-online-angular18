import { Routes } from '@angular/router';


export const routes: Routes = [
    {path:'', loadComponent:()=>import('./tienda-online/listado-productos/listado-productos.component'), pathMatch:'full'},
    {path:'listado', loadComponent:()=>import('./tienda-online/listado-productos/listado-productos.component')},
    {path:'agregar',loadComponent:()=> import('./tienda-online/formulario-producto/formulario-producto.component')},
    {path:'editar/:id', loadComponent:()=> import('./tienda-online/formulario-producto/formulario-producto.component')}
];
