import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Product } from 'src/projectmodule/Product';
import { productservice } from '../product.service';

@Component(
{
        selector:"ptab",
        templateUrl:'./ptab.component.html',
        styleUrls:['./ptab.component.css']
})

export class ptabcomponent implements OnInit
{
       flag=false;
     parr:Product[];
     ob:Product;
     constructor(private servive:productservice)
     {
             console.log("constuctor of ptable called");
     }

     ngOnInit():void
     {
        this.parr=this.servive.getAllProduct();
     }
     udateProduct(p:Product)
     {
             this.flag=true;
             this.ob=p;
     }
    deleteProduct(p:Product)
    {
          this.servive.delProduct(p);  
    }

     displayProduct()
    {
        this.flag=!this.flag;
      
     }
       
}