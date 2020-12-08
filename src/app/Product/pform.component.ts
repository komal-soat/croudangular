import {Component, EventEmitter, Input, Output, SimpleChange} from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { stringify } from 'querystring';
import { Product } from 'src/projectmodule/Product';
import { productservice } from '../product.service';
@Component({
    selector:"pform",
    templateUrl:'./pform.component.html',
    styleUrls:['./pform.component.css']

})
export class pformcomponent{

    pid:number;
    pname:string;
    price:number;
//flag=false;
@Input("uprod") prod:Product;
@Output() myevent=new EventEmitter();
ngOnChanges(change:SimpleChange)
{
    if(change["prod"].currentValue!=change["prod"].previousValue)
    {
        this.pid=this.prod.pid;
        this.pname=this.prod.pname;
        this.price=this.prod.price;

    }
}
    constructor(private service:productservice)
    {

    }

    ngOnInit()
    {
       
    }

    addProduct()
    {
        let p=new Product(this.pid,this.pname,this.price);
        this.service.addProduct(p);
      this.pid=0;
      this.pname=null;
      this.price=0;
      this.myevent.emit(false);
     }


     updateProduct()
     {
        let p=new Product(this.pid,this.pname,this.price);
         this.service.updateProduct(p)
         this.pid=0;
         this.pname=null;
         this.price=0;
         this.myevent.emit(false);
     }
}