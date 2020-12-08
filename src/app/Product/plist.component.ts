import { Component, OnInit } from '@angular/core';
import { Product } from 'src/projectmodule/Product';
import { productservice } from '../product.service';

@Component({
  selector: 'plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit {
parr:Product[];
constructor(private service:productservice) { 
  console.log("call plist constructor");
  
}

  ngOnInit(): void {
    console.log("Oninit called");
    this.parr=this.service.getAllProduct();
    
  }

}
