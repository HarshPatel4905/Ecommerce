import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopCheckoutComponent } from './pages/shop-checkout.component';
import { ShopHomeComponent } from './pages/shop-home.component';
import { ShopAboutComponent } from './pages/shop-about.component';
import { ShopAccountComponent } from './pages/shop-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopCheckoutComponent,
    ShopHomeComponent,
    ShopAboutComponent,
    ShopAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
