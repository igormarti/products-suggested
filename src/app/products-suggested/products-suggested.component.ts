import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { GetProductsSuggestedService } from '../services/get-products-suggested.service';

@Component({
  selector: 'app-products-suggested',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-suggested.component.html',
  styleUrl: './products-suggested.component.scss'
})
export class ProductsSuggestedComponent implements OnInit {

  products:Array<Product> = [];

  constructor(private productService:GetProductsSuggestedService){}

  ngOnInit(): void {
    this.init();
  }

  public init(){
    this.productService.execute().subscribe((products) => {
      this.products = products;
    })
  }
}
