import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent {
  products: Array<any> = [
    {
      "name" : "Dress",
      "price": 200,
      "category": "Cloth",
      "imgUrl": "https://cdn.shopify.com/s/files/1/0594/1506/8881/products/5651_4_Zeynep-Wine-Asymmetric-Ruched-Midi-Dress.jpg?v=1668516489&width=720"
    },
    {
      "name" : "Computer",
      "price": 1000,
      "category": "Material",
      "imgUrl": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/520092-Product-0-I-637871918577112386_c9da77a2-47e4-4351-b4ab-c88a69a3b5f7.jpg?v=1658208959"
    },
    {
      "name" : "Iphone S",
      "price": 400,
      "category": "Phone",
      "imgUrl": "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png"
    },
    {
      "name" : "Shoes",
      "price": 100,
      "category": "Shoes",
      "imgUrl": "https://cdn.shopify.com/s/files/1/0075/3929/4305/collections/G22_WA_AP_NAV-Shoes.jpg?v=1645999375"
    },
    {
      "name" : "Iphone 12",
      "price": 900,
      "category": "Phone",
      "imgUrl": "https://www.meiteshop.fr/wp-content/uploads/2020/12/12.jpg"
    }
  ]
  
}
