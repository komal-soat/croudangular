import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ptabcomponent } from './Product/ptab.component';
import { pformcomponent } from './Product/pform.component';
import { FormsModule } from '@angular/forms';
import { PlistComponent } from './Product/plist.component';
import { productservice } from './product.service';

@NgModule({
  declarations: [
    AppComponent,ptabcomponent,pformcomponent, PlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [productservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
