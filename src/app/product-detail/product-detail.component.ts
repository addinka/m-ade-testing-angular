import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
 
})
export class ProductDetailComponent    {
  details:any;



  constructor(private productService: ProductService,private route: ActivatedRoute, public router: Router, private readonly http: HttpClient){
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(){
    
    let index = this.
    route.snapshot.paramMap.get('id');
    console.log(index);
    this.productService.getProductDetail(index).subscribe(data => {
      console.log(data)
      this.details=data;
       
 
    });
  }
 
 
}
