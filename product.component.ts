import { Component, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { ProductsInterface } from '../product';
import { ProductserviceService } from './productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit 
{
  

  constructor(
    private productService:ProductserviceService
  ) { }

  private subscription!: Subscription
  loading = false
  ngOnInit(): void 
  {
    this.productService.getproducts().subscribe(p=>this.filterProductArray=p)

    this.productService.getObs1()
    .subscribe(
      val=>{console.log(val)},
      err=>{console.log(err)},
      ()=>console.log("completed")
      )

    this.productService.getObs2()
    .subscribe(
      val=>{console.log(val)},
      err=>{console.log(err)},
      ()=>console.log("completed")
      )

    this.subscription=this.productService.getObs3().subscribe(
      val=>console.log(val),
      err=>console.log(err),
      ()=>console.log("obs3 is complete")
      )

    this.productService.getObs4()
    .pipe(filter(val => val%2==0),
      map(val => val+10)
    )
    .subscribe(
      val=>console.log(val),
      err=>console.log(err),
      ()=>console.log("obs 4 completed")
    )

    this.loading=true
    this.productService.getproducts().subscribe(

      data=>{
        this.loading = false
        this.products=data
        this.filterProductArray=this.products
      }
    )

  }
  // cardwidth=16.9;
  // cardheight=35;
  // shadow="5px 10px #808080";
  // cardTextStyles =
  // {
  //   "font-size":'14px',
  //   "font-family":'Comic Sans MS'
  // };

  private _searchBy:string=""
  products:ProductsInterface[]=[]

  // products:ProductsInterface[]=[
  //   {
  //     id:1,
  //     name:"SOFA",
  //     price:20000,
  //     description:"Sink into the luxurious cushions of the Remy Sofa to experience ultimate comfort and relaxation.",
  //     img:"assets/img/sofa1.jpg",
  //     bgcolor:true,
  //     rating:4.4,
  //     category:"sofa",
  //     code:"sofa-001"
  //   },
  //   {
  //     id:2,
  //     name:"TABLE",
  //     price:20000,
  //     description:"A table for every snack and occasion. Table is a contemporary take on a mid-century classic.",
  //     img:"assets/img/table1.jpg",
  //     bgcolor:false,
  //     rating:4.4,
  //     category:"table",
  //     code:"table-001"
  //   },
  //   {
  //     id:3,
  //     name:"BED",
  //     price:20000,
  //     description:"The Cinder Bed is a classic, low-profile bed with a clean, comfortable design.",
  //     img:"assets/img/bed3.jpg",
  //     bgcolor:true,
  //     rating:4.4,
  //     category:"bed",
  //     code:"bed-001"
  //   },
  //   {
  //     id:4,
  //     name:"CHAIR",
  //     price:20000,
  //     description:"Those curves, though… the Sutton Accent Chair is equal parts elegant and ergonomic.",
  //     img:"assets/img/chair1.jpg",
  //     bgcolor:false,
  //     rating:4.4,
  //     category:"chair",
  //     code:"chair-001"
  //   },
  //   {
  //     id:5,
  //     name:"SOFA",
  //     price:20000,
  //     description:"Sink into the luxurious cushions of the Remy Sofa to experience ultimate comfort and relaxation.",
  //     img:"assets/img/sofa2.jpg",
  //     bgcolor:true,
  //     rating:4.4,
  //     category:"sofa",
  //     code:"sofa-002"
  //   },
  //   {
  //     id:6,
  //     name:"TABLE",
  //     price:20000,
  //     description:"A table for every snack and occasion. Table is a contemporary take on a mid-century classic.",
  //     img:"assets/img/table2.jpg",
  //     bgcolor:false,
  //     rating:4.4,
  //     category:"table",
  //     code:"table-002"
  //   },
  //   {
  //     id:7,
  //     name:"BED",
  //     price:20000,
  //     description:"The Cinder Bed is a classic, low-profile bed with a clean, comfortable design.",
  //     img:"assets/img/bed2.jpg",
  //     bgcolor:true,
  //     rating:4.4,
  //     category:"bed",
  //     code:"bed-002"
  //   },
  //   {
  //     id:8,
  //     name:"CHAIR",
  //     price:20000,
  //     description:"Industrial and mid-century modern come together to form the Asher Chair.",
  //     img:"assets/img/chair2.jpg",
  //     bgcolor:false,
  //     rating:4.4,
  //     category:"chair",
  //     code:"chair-002"
  //   },
  //   {
  //     id:9,
  //     name:"SOFA",
  //     price:20000,
  //     description:"Sink into the luxurious cushions of the Remy Sofa to experience ultimate comfort and relaxation.",
  //     img:"assets/img/sofa3.jpg",
  //     bgcolor:true,
  //     rating:4.4,
  //     category:"sofa",
  //     code:"sofa-003"
  //   },
  //   {
  //     id:10,
  //     name:"TABLE",
  //     price:20000,
  //     description:"A table for every snack and occasion. Table is a contemporary take on a mid-century classic.",
  //     img:"assets/img/table3.jpg",
  //     bgcolor:false,
  //     rating:4.4,
  //     category:"table",
  //     code:"table-003"
  //   },
  //   {
  //     id:11,
  //     name:"BED",
  //     price:20000,
  //     description:"The Cinder Bed is a classic, low-profile bed with a clean, comfortable design.",
  //     img:"assets/img/bed1.jpg",
  //     bgcolor:true,
  //     rating:4.4,
  //     category:"bed",
  //     code:"bed-003"
  //   },
  //   {
  //     id:12,
  //     name:"CHAIR",
  //     price:20000,
  //     description:"Industrial and mid-century modern come together to form the Asher Chair.",
  //     img:"assets/img/chair3.jpg",
  //     bgcolor:false,
  //     rating:4.4,
  //     category:"chair",
  //     code:"chair-003"
  //   },
  //   {
  //     id:13,
  //     name:"SOFA",
  //     price:20000,
  //     description:"Sink into the luxurious cushions of the Remy Sofa to experience ultimate comfort and relaxation.",
  //     img:"assets/img/sofa4.jpg",
  //     bgcolor:true,
  //     rating:4.4,
  //     category:"sofa",
  //     code:"sofa-004"
  //   },
  //   {
  //     id:14,
  //     name:"TABLE",
  //     price:20000,
  //     description:"A table for every snack and occasion. Table is a contemporary take on a mid-century classic.",
  //     img:"assets/img/table4.jpg",
  //     bgcolor:false,
  //     rating:4.4,
  //     category:"table",
  //     code:"table-004"
  //   },
  //   {
  //     id:15,
  //     name:"BED",
  //     price:20000,
  //     description:"The Cinder Bed is a classic, low-profile bed with a clean, comfortable design.",
  //     img:"assets/img/bed4.jpg",
  //     bgcolor:true,
  //     rating:4.4,
  //     category:"bed",
  //     code:"bed-004"
  //   },
  //   {
  //     id:16,
  //     name:"CHAIR",
  //     price:20000,
  //     description:"Those curves, though… the Sutton Accent Chair is equal parts elegant and ergonomic.",
  //     img:"assets/img/chair4.jpg",
  //     bgcolor:false,
  //     rating:4.4,
  //     category:"chair",
  //     code:"chair-004"
  //   },
  // ]

filterProductArray=this.products
filterProduct(categoryX:string):void
{
  if(categoryX==="all")
  {
    this.filterProductArray=this.products
  }
  else{
    this.filterProductArray=this.products.filter(product=>product.category===categoryX)
  }
}

get searchBy():string
  {
    return this._searchBy
  }
  set searchBy(sb:string)
  {
    this._searchBy=sb
    this.filterProductArray=this.products.filter(product=>product.name.toLowerCase().includes(sb.toLowerCase()))
  }

//pagination logic start

  pageNo=1
  startIndex=0
  endIndex=4
  item_per_page=4
  demo=true
  changePage(pageNumber:number)
  {
    this.startIndex=(pageNumber-1)*this.item_per_page
    this.endIndex=pageNumber*this.item_per_page
    //this.demo=!this.demo

  }

//pagination logic end

//receving Event Emitter
displayRating(rt:number)
{
  console.log(rt);
}

//AddToCart start here
addToCart()
{
  this.productService.increamentCartValue()
}

}
