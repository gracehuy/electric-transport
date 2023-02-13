import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { VehiclesComponent } from './Components/vehicles/vehicles.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ConversionComponent } from './Components/conversion/conversion.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TransportTypeComponent } from './Components/transport-type/transport-type.component';
import { LimitPipe } from './Pipes/limit.pipe';
import { TimelimitPipe } from './Pipes/timelimit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VehiclesComponent,
    FooterComponent,
    ConversionComponent,
    TransportTypeComponent,
    LimitPipe,
    TimelimitPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
