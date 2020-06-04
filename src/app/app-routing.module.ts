import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermitsComponent } from './components/permits/permits.component';

const routes: Routes = [
  {
    path: '',
    component: PermitsComponent,
    data: {
      name: 'Permits'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
