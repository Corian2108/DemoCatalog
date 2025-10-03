import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { HttpClient } from '@angular/common/http';

import { Products } from '../../classes/products';

@Component({
  selector: 'app-shop',
  imports: [NgForOf],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})

export class ShopComponent {

  // products = [1,2,3,4,5,6]
  products: Products[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('./assets/data/data.json').subscribe(
      data => { this.products = data, console.log(this.products) },
      err => console.error(err)
    );
  }

}
