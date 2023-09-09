import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from "./reservas/reservas.component";

const routes: Routes = [
  // Otras rutas
  { path: 'reservas', component: ReservasComponent }, ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
