import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-dashboard',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './usuario-dashboard.component.html',
  styleUrls: ['./usuario-dashboard.component.css'],
})
export class UsuarioDashboardComponent implements OnInit {
  username: string = '';
  email: string = '';
  selectedCombustible: any = null;
  litros: number = 0;
  combustibles: any[] = [];
  codigoGenerado: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCombustibles();
  }

  loadCombustibles() {
    this.http.get<any[]>(`${environment.apiUrl}/combustible`).subscribe((data: any[]) => {
      this.combustibles = data;
    }, error => {
      console.error('Error al cargar los combustibles:', error);
    });
  }

  onSubmit() {
    const requestData = {
      UserId: this.getUserIdByEmail(this.email),
      Litros: this.litros,
      Tipo_combustible: this.selectedCombustible?.tipo_combustible
    };

    this.http.post(`${environment.apiUrl}/codigo/generar`, requestData).subscribe(
      (response: any) => {
        console.log('Código generado:', response);
        this.codigoGenerado = response.codigoGenerado;
      },
      error => {
        console.error('Error al generar el código:', error);
      }
    );
  }

  getUserIdByEmail(email: string): number {
    return 1;
  }
}
