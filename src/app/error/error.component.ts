import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export default class ErrorComponent {

}
