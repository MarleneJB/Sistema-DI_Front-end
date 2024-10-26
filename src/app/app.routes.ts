import { Routes } from '@angular/router';
import { SelectUserComponent } from './select-user/select-user.component';
import { InvitadoDashboardComponent } from './invitado-dashboard/invitado-dashboard.component';
import { UsuarioDashboardComponent } from './usuario-dashboard/usuario-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  {path: '', component: SelectUserComponent},
  { path: 'invitado-dashboard', component: InvitadoDashboardComponent },
  { path: 'usuario-dashboard', component: UsuarioDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent }
];
