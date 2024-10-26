import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  imports: [HttpClientModule, FormsModule, CommonModule]
})
export class AdminDashboardComponent implements OnInit {
  precioEntrada: number = 0;
  historialPrecios: any[] = []; // Almacena el historial de precios

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerPrecio();
    this.obtenerHistorialPrecios();
  }

  obtenerPrecio() {
    const url = `${environment.apiUrl}/precios/actual`;

    this.http.get<{ monto: number }>(url)
      .subscribe({
        next: (response) => {
          this.precioEntrada = response.monto;
        },
        error: (error) => {
          console.error('Error al obtener el precio:', error);
        }
      });
  }

  guardarPrecio() {
    const url = `${environment.apiUrl}/precios/actualizar`;

    this.http.put(url, this.precioEntrada)
      .subscribe({
        next: (response) => {
          console.log('Respuesta de la API:', response);
          alert('Precio actualizado correctamente');
          this.obtenerPrecio();
          this.obtenerHistorialPrecios();
        },
        error: (error) => {
          console.error('Error al actualizar el precio:', error);
          alert('Error al actualizar el precio. Intenta de nuevo.');
        }
      });
  }

  obtenerHistorialPrecios() {
    const url = `${environment.apiUrl}/precios/historial`;

    this.http.get<any[]>(url).subscribe({
      next: (response) => {
        this.historialPrecios = response;
        console.log('Historial de precios:', this.historialPrecios);
      },
      error: (error) => {
        console.error('Error al obtener el historial de precios:', error);
      }
    });
  }

  imprimirReporte() {
    const doc = new jsPDF();
    doc.text('Reporte de Cambio de Precios', 10, 10);
    doc.text(`Precio actual de entrada a baños: $${this.precioEntrada}`, 10, 20);
    doc.text(`Fecha de generación: ${new Date().toLocaleString()}`, 10, 30);


    let yPosition = 40;
    doc.text('Historial de Cambios:', 10, yPosition);
    yPosition += 10;

    this.historialPrecios.forEach((item, index) => {
        const fechaCambio = new Date(item.fechaCambio).toLocaleString();
        const cambio = `Cambio ${index + 1}: De $${item.precioAnterior} a $${item.precioNuevo} el ${fechaCambio}`;
        doc.text(cambio, 10, yPosition);
        yPosition += 10;
    });

    doc.save('reporte_cambio_precios.pdf');
}
}
