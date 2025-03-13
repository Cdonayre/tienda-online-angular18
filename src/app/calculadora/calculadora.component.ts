import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;
  sumar() {
    this.resultado = this.operandoA + this.operandoB;
   }

}
