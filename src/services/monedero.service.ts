import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MonederoService {
    private apiUrl = 'http://localhost:5001/api/monedero';

    constructor(private http: HttpClient) { }

    actualizarSaldo(userId: number, cantidad: number): Observable<any> {
        return this.http.put(`${this.apiUrl}/actualizar-saldo`, { userId, cantidad });
    }

    verificarSaldo(userId: number, precioEntrada: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/verificar-saldo?userId=${userId}&precioEntrada=${precioEntrada}`);
    }
}
