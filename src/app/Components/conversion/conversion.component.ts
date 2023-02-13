import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/Services/vehicle.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  showDistance: boolean = false;
  showTime: boolean = false;
  type!: any;
  valid: boolean = true;
  validTime: boolean = true;
  time!: any;
  distance!: any;
  selectedValue!: any;
  vehicles!: Array<any>;
  timeInput!: any;
  distanceResult!: any;


  constructor(private vehicleService: VehicleService, private router: Router) { 
    this.vehicles = vehicleService.vehicles;
    console.log(this.selectedValue);
  }

  ngOnInit(): void {
  }

  convert(){
    this.validateInput();
    console.log(this.distance);
    console.log('You selected: ',this.selectedValue);
    this.time = this.distance/this.selectedValue.speed;
    console.log(this.time);
    console.log(this.valid);
    if(this.valid){
      this.sendDistance(this.distance);
    this.router.navigate(['/conversion/'+this.selectedValue.type]);
    }
  }

  convertToDistance(){
    this.validateTimeInput();
    console.log('Input time', this.timeInput);
    console.log('You selected: ',this.selectedValue);
    console.log(this.valid);
    if(this.validTime){
        this.sendTime(this.timeInput);
        this.router.navigate(['/conversion/'+this.selectedValue.type]);
    //   this.sendDistance(this.distance);
    // this.router.navigate(['/conversion/'+this.selectedValue.type]);
    }
  }

  validateInput(){
    if(this.distance===undefined || this.distance<=0 || this.selectedValue===undefined){
      this.valid = false;
    }
    else{
      this.valid = true;
    }
  }

  sendTime(data:any){
    this.vehicleService.sendTime(data);
  }

  sendDistance(data: any){
    this.vehicleService.sendDistance(data);
  }

  getType(){
    this.type = this.selectedValue.type;
  }

  sendBoolean(data:any){
    this.vehicleService.sendBoolean(data);
  }

  chooseDistance(){
    this.showDistance = true;
    this.showTime = false;
    this.sendBoolean(this.showDistance);
  }

  chooseTime(){
    this.showTime = true;
    this.showDistance = false;
    this.sendBoolean(this.showDistance);
    this.refresh();
  }

  validateTimeInput(){
    if(this.timeInput===undefined || this.timeInput<=0 || this.selectedValue===undefined){
      this.validTime = false;
    }
    else{
      this.validTime = true;
    }
  }

  refresh(){
    this.distance = 0;
    this.sendDistance(this.distance);
  }

}
