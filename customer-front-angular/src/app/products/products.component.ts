import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products : any;
  constructor(private http : HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('http://localhost:8098/products')
      .subscribe({
        next : value => {
          this.products = value;
          console.log(this.products);
        },
        error : err => console.log(err)
      })
  }

}
