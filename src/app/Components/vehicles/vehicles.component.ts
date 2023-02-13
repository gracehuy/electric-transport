import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/Services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles!: Array<any>;
  constructor(private vehicleService:VehicleService) {  
    this.vehicles = this.vehicleService.vehicles;
  }

  ngOnInit(): void {
  }

}
