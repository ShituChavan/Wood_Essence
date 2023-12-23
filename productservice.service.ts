import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, delay, map, Observable, of} from 'rxjs';
import { Category, ProductsInterface } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  constructor(private http:HttpClient) {}

  private Obs1$= of (40,"hello")

  getObs1():Observable<number|string>
  {
    return this.Obs1$
  }

  private Obs2$= new Observable(
    observe=>{
      observe.next(100);
      observe.next("Javascript");
      //throw Error("some error occured");
      observe.next("mumbai");
      observe.complete();
    }
  );

  getObs2():Observable<any>
  {
    return this.Obs2$
  }

  private Obs3$= new Observable(
    observe=>{
      observe.next("Data 1"),
      observe.next("Data 2"),
      setTimeout(()=> {
        observe.next("Data 3")
      }, 4000);
      observe.complete()
    }
  )

getObs3():Observable<any>
{
    return this.Obs3$
}

private obs4$=of(1,2,3,4,5)
getObs4():Observable<any>
{
    return this.obs4$
}
  //add to cart
  cartValue=0
  cartValue$=new BehaviorSubject<number>(0)

  //increament cart value
  increamentCartValue()
  {
    this.cartValue++;
    this.cartValue$.next(this.cartValue)
  }

  //decreament cart value
  decCartValue()
  {
    this.cartValue--;
    this.cartValue$.next(this.cartValue)
  }
  getCartValue():Observable<number>
  {
    return this.cartValue$
  }


  products:ProductsInterface[]=[
    {
      id:1,
      name:"SOFA",
      price:20000,
      description:"Sink into the luxurious cushions of the Remy Sofa to experience ultimate comfort and relaxation.",
      img:"assets/img/sofa1.jpg",
      bgcolor:true,
      rating:4.4,
      category:Category.SOFA,
      code:"sofa-001"
    },
    {
      id:2,
      name:"TABLE",
      price:20000,
      description:"A table for every snack and occasion. Table is a contemporary take on a mid-century classic.",
      img:"assets/img/table1.jpg",
      bgcolor:false,
      rating:4.4,
      category:Category.TABLE,
      code:"table-001"
    },
    {
      id:3,
      name:"BED",
      price:20000,
      description:"Made of premium-quality engineered wood with a provincial teak finish. Strong, durable wood. The ideal base for uninterrupted, sound sleep.",
      img:"assets/img/bed3.jpg",
      bgcolor:true,
      rating:4.4,
      category:Category.BED,
      code:"bed-001"
    },
    {
      id:4,
      name:"CHAIR",
      price:20000,
      description:"Those curves, though… the Sutton Accent Chair is equal parts elegant and ergonomic.",
      img:"assets/img/chair1.jpg",
      bgcolor:false,
      rating:4.4,
      category:Category.CHAIRS,
      code:"chair-001"
    },
    {
      id:5,
      name:"SOFA",
      price:20000,
      description:"Sink into the luxurious cushions of the Remy Sofa to experience ultimate comfort and relaxation.",
      img:"assets/img/sofa2.jpg",
      bgcolor:true,
      rating:4.4,
      category:Category.SOFA,
      code:"sofa-002"
    },
    {
      id:6,
      name:"TABLE",
      price:20000,
      description:"A table for every snack and occasion. Table is a contemporary take on a mid-century classic.",
      img:"assets/img/table2.jpg",
      bgcolor:false,
      rating:4.4,
      category:Category.TABLE,
      code:"table-002"
    },
    {
      id:7,
      name:"BED",
      price:20000,
      description:"Made of premium-quality engineered wood with a provincial teak finish. The ideal base for uninterrupted.",
      img:"assets/img/bed2.jpg",
      bgcolor:true,
      rating:4.4,
      category:Category.BED,
      code:"bed-002"
    },
    {
      id:8,
      name:"CHAIR",
      price:20000,
      description:"Industrial and mid-century modern come together to form the Asher Chair.",
      img:"assets/img/chair2.jpg",
      bgcolor:false,
      rating:4.4,
      category:Category.CHAIRS,
      code:"chair-002"
    },
    {
      id:9,
      name:"SOFA",
      price:20000,
      description:"Sink into the luxurious cushions of the Remy Sofa to experience ultimate comfort and relaxation.",
      img:"assets/img/sofa3.jpg",
      bgcolor:true,
      rating:4.4,
      category:Category.SOFA,
      code:"sofa-003"
    },
    {
      id:10,
      name:"TABLE",
      price:20000,
      description:"A table for every snack and occasion. Table is a contemporary take on a mid-century classic.",
      img:"assets/img/table3.jpg",
      bgcolor:false,
      rating:4.4,
      category:Category.TABLE,
      code:"table-003"
    },
    {
      id:11,
      name:"BED",
      price:20000,
      description:"Made of premium-quality engineered wood with a provincial teak finish. The ideal base for uninterrupted.",
      img:"assets/img/bed1.jpg",
      bgcolor:true,
      rating:4.4,
      category:Category.BED,
      code:"bed-003"
    },
    {
      id:12,
      name:"CHAIR",
      price:20000,
      description:"Industrial and mid-century modern come together to form the Asher Chair.",
      img:"assets/img/chair3.jpg",
      bgcolor:false,
      rating:4.4,
      category:Category.CHAIRS,
      code:"chair-003"
    },
    {
      id:13,
      name:"SOFA",
      price:20000,
      description:"Sink into the luxurious cushions of the Remy Sofa to experience ultimate comfort and relaxation.",
      img:"assets/img/sofa4.jpg",
      bgcolor:true,
      rating:4.4,
      category:Category.SOFA,
      code:"sofa-004"
    },
    {
      id:14,
      name:"TABLE",
      price:20000,
      description:"A table for every snack and occasion. Table is a contemporary take on a mid-century classic.",
      img:"assets/img/table4.jpg",
      bgcolor:false,
      rating:4.4,
      category:Category.TABLE,
      code:"table-004"
    },
    {
      id:15,
      name:"BED",
      price:20000,
      description:"Made of premium-quality engineered wood with a provincial teak finish. The ideal base for uninterrupted.",
      img:"assets/img/bed4.jpg",
      bgcolor:true,
      rating:4.4,
      category:Category.BED,
      code:"bed-004"
    },
    {
      id:16,
      name:"CHAIR",
      price:20000,
      description:"Those curves, though… the Sutton Accent Chair is equal parts elegant and ergonomic.",
      img:"assets/img/chair4.jpg",
      bgcolor:false,
      rating:4.4,
      category:Category.CHAIRS,
      code:"chair-004"
    },
  ]
  getproducts():Observable<ProductsInterface[]>
  {
    return this.http.get<ProductsInterface[]>("http://localhost:4200/assets/product.json")
  }

  getIdBasedProduct(id:number):Observable<ProductsInterface | undefined>
  {
    return this.http.get<ProductsInterface[]>
    ("http://localhost:4200/assets/product.json").pipe(
      map(products=>{return products.find(product=>product.id===id)})
    )
  }


}
