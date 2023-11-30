import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any ;
  categories:any ;
  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }
  filterPro(value: any) { 
     console.log(value.target.value); 
     this.productService.getProductsCat(value.target.value).subscribe(data => {
      this.products = data;
    });
  } 
}
