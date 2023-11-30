import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
  getProductDetail(id:any){
    return this.http.get(this.apiUrl+'/'+id);
  }
  getCategories(): Observable<any>{
    return this.http.get(this.apiUrl+'/categories');
  }
  getProductsCat(cat:string): Observable<any>{
    return this.http.get(this.apiUrl+'/category/'+cat);
  }
}