import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';

const routes: Routes = [
  { path: '', pathMatch:"full", component: ProductListComponentComponent}, 
  { path: 'products', component: ProductListComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
