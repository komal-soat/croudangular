import { Component, OnInit ,Injectable} from '@angular/core';
import { inject } from '@angular/core/testing';
import { Product } from 'src/projectmodule/Product';

@Injectable()
export class productservice {

  parr:Product[]=[
    {pid:10,pname:"chips",price:45},
    {pid:20,pname:"choklet",price:80},
    {pid:30,pname:"cake",price:500},
    {pid:40,pname:"Slice",price:60},];

getAllProduct():Product[]
{
    return this.parr;
}

addProduct(p:Product)
{
    this.parr.push(p);
}

updateProduct(p:Product)
{
  for(var i=0;i<this.parr.length;i++)
  {
    if(this.parr[i].pid==p.pid)
    {
      this.parr[i].pname=p.pname;
      this.parr[i].price=p.price;
    }
  }
}

delProduct(p:Product)
{
  for(var i=0;i<this.parr.length;i++)
  {
    if(this.parr[i].pid==p.pid)
    {
      this.parr.splice(i,1);
      
    }
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}