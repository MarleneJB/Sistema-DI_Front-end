import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invitado-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './invitado-dashboard.component.html',
  styleUrl: './invitado-dashboard.component.css'
})
export class InvitadoDashboardComponent {
  guardarpago() {
    console.log('Pago guardado');
  }
  imprimirTicket() {
    console.log('Imprimiendo ticket...');
  }
  generarcodigo() {
    console.log('Codigo generado');
  }

}
