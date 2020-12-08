import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlistComponent } from './Product/plist.component';
import { ptabcomponent } from './Product/ptab.component';

const routes: Routes = [{path:"ptab", component:ptabcomponent},
                        {path:"plist",component:PlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
