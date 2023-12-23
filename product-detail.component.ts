import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsInterface } from '../product';
import { ProductserviceService } from '../product/productservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor
  (
    private route:ActivatedRoute,
    private productService:ProductserviceService
  ) { }

  data$!:Observable<ProductsInterface | undefined> 

  ngOnInit(): void {
    const id= +this.route.snapshot.paramMap.get('id')!
    console.log(id);

    this.data$= this.productService.getIdBasedProduct(id)
    this.data$.subscribe(
      data=> console.log(data)
    )
  }

}
