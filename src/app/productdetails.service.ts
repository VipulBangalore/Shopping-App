import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private http: HttpClient) {
   }
   private producturl = '../assets/Mock-Data/p.json';
   // tslint:disable-next-line: typedef
   public getData = function() {
    return this.http.get(this.producturl);
   };

}
