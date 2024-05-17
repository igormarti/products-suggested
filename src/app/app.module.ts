import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsSuggestedComponent } from './products-suggested/products-suggested.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsSuggestedComponent,
    HttpClientModule
  ],
  exports: [
    ProductsSuggestedComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
