import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsSuggestedComponent } from './products-suggested/products-suggested.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsSuggestedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
