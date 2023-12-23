import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductserviceService } from './product/productservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
  private productService:ProductserviceService
  )
  {}
  cart_value=new BehaviorSubject<number>(0)

  //creating object of subject and behaviour subject
  subObs$= new Subject<number>();
  bsubObs$= new BehaviorSubject<number>(1);

  ngOnInit(): void {

    this.cart_value = this.productService.cartValue$;

    //adding data to subject and behaviour subject
    //before Subscribing
    this.subObs$.next(1)
    this.bsubObs$.next(1)

    this.subObs$.subscribe(val => console.log(val))
    this.bsubObs$.subscribe(val => console.log(val))

    this.subObs$.next(2)
    this.bsubObs$.next(2)
  }

  title = 'Wood Essence';
}
