import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent {
  constructor(private router: Router) {}

  selectUser(type: string) {
    if (type === 'invitado') {
      this.router.navigate(['/invitado-dashboard']);
    } else {
      this.router.navigate(['/usuario-dashboard']);
    }
  }

  irAAdministrador() {
    this.router.navigate(['/admin-dashboard']);
  }
}
