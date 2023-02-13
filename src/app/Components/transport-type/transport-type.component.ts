import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VehicleService } from 'src/app/Services/vehicle.service';

@Component({
  selector: 'app-transport-type',
  templateUrl: './transport-type.component.html',
  styleUrls: ['./transport-type.component.scss']
})
export class TransportTypeComponent implements OnInit, OnDestroy {
  vehicle!: any;
  others: Array<any> = [];
  distance!: any;
  sub!: Subscription;
  booleanSub!: Subscription;
  timeSub!: Subscription;
  time!: any;
  inputTime!: any;
  getTimeOrNot!: any;
  distanceResult!: any;

  constructor(private vehicleService: VehicleService,
              private actRoute: ActivatedRoute) { 
              }

  ngOnInit(): void {
    this.booleanSub = this.vehicleService.getTimeOrNot.subscribe(
      (data:any)=>{
        this.getTimeOrNot = data;
      }
    )
    console.log("Get time or not ", this.getTimeOrNot);
    this.getTransportType();
    
  }

  getTransportType(){
    this.sub = this.vehicleService.distance.subscribe(
      (data:any)=>{
        this.distance = data;
      }
    )

    this.timeSub = this.vehicleService.time.subscribe(
      (data:any)=>{
        this.inputTime = data;
      }
    )
    console.log('distance: ', this.distance);
    let type = this.actRoute.snapshot.paramMap.get('type');
    console.log(type);
    let vehicels = this.vehicleService.vehicles;
    for(var val of vehicels){
      if(val.type === type){
        this.vehicle = val;
        if(this.distance!==0){
          console.log('distance',this.distance);
        this.time = this.distance/this.vehicle.speed*60;
        }
        else{
        this.distanceResult = this.inputTime*this.vehicle.speed/60;
        console.log('result ', this.distanceResult)
        }
      }
      else{
        this.others.push(val);
      }
    }
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
      this.booleanSub.unsubscribe();
      this.timeSub.unsubscribe();
  }

}
