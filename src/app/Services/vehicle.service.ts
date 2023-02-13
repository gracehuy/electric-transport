import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicles: Array<any> = [{"type":"Walking", "speed":3.1, "range":30, "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqSIO7HWMq-bWsnMpdnPs5gvhjrcwHEhU8A&usqp=CAU"}, 
                          {"type":"Boosted Mini S Board", "speed":18, "range":7, "image":"https://cdn.shopify.com/s/files/1/0268/1454/6031/files/minimotors-dualtron-speedway-electric-scooters_1000x.jpg?v=1655838313"},
                          {"type":"Evolve Bamboo GTR 2in1", "speed":24, "range":31, "image":"https://cdn.shopify.com/s/files/1/0232/5683/products/GTR2_Bamboo_2in1_750x750.jpg?v=1663638096"},
                          {"type":"OneWheel XR", "speed":19, "range":18, "image":"https://cdn.shopify.com/s/files/1/0696/2011/products/GT_Tread_1000x.png?v=1673304114"},
                          {"type":"MotoTec Skateboard", "speed":22, "range":10, "image":"https://m.media-amazon.com/images/I/61z58dP3CyL._AC_SX679_.jpg"},
                          {"type":"Segway Ninebot S", "speed":10, "range":13, "image":"https://segway.imgix.net/catalog/product/cache/712d521b123ff3e7b32b9930d61c12be/n/i/ninebots_s_white_708x708_1_1.png"},
                          {"type":"Segway Ninebot S-PLUS", "speed":12, "range":22, "image":"https://segway.imgix.net/catalog/product/cache/1be073bb625205c2a3aab025b4fe3368/s/_/s_plus_708x708_1.png?auto=format%2Ccompress&dpr=2&q=50&w=700"},
                          {"type":"Razor Scooter", "speed":18, "range":15, "image":"https://razor.com/wp-content/uploads/2020/04/EPrime_III_Product.png"},
                          {"type":"GeoBlade 500", "speed":15, "range":8, "image":"https://cdn.thisiswhyimbroke.com/images/geoblade-electric-hoverboard-640x533.jpg"},
                          {"type":"Hovertrax Hoverboard", "speed":9, "range":6, "image":"https://razor.com/wp-content/uploads/2020/07/Hovertrax_Prizma_BK_Product-900x421.png"}];


  dataSource = new BehaviorSubject<any>(0);
  distance: Observable<any> = this.dataSource.asObservable();

  sendDistance(data: any){
    this.dataSource.next(data);
  }

  getBoolean = new BehaviorSubject<any>(false);
  getTimeOrNot: Observable<any> = this.getBoolean.asObservable();

  sendBoolean(data:any){
    this.getBoolean.next(data);
  }

  TimeSource = new BehaviorSubject<any>(0);
  time: Observable<any> = this.TimeSource.asObservable();

  sendTime(data:any){
    this.TimeSource.next(data);
  }

  constructor() { }
}
