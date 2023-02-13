import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './Components/conversion/conversion.component';
import { TransportTypeComponent } from './Components/transport-type/transport-type.component';
import { VehiclesComponent } from './Components/vehicles/vehicles.component';

const routes: Routes = [
  {path: '', redirectTo: '/conversion', pathMatch: 'full' },
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'conversion', component: ConversionComponent},
  {path: 'conversion/:type', component: TransportTypeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
