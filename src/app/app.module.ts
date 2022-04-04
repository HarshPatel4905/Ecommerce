import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopCheckoutComponent } from './pages/shop-checkout.component';
import { ShopHomeComponent } from './pages/shop-home.component';
import { ShopAboutComponent } from './pages/shop-about.component';
import { ShopAccountComponent } from './pages/shop-account.component';
import { ShopContactsComponent } from './pages/shop-contacts.component';
import { ShopFaqComponent } from './pages/shop-faq.component';
import { ShopGoodsCompareComponent } from './pages/shop-goods-compare.component';
import { ShopItemComponent } from './pages/shop-item.component';
import { ShopPrivacyPolicyComponent } from './pages/shop-privacy-policy.component';
import { ShopProductListComponent } from './pages/shop-product-list.component';
import { ShopSearchResultComponent } from './pages/shop-search-result.component';
import { ShopShoppingCartComponent } from './pages/shop-shopping-cart.component';
import { ShopShoppingCartNullComponent } from './pages/shop-shopping-cart-null.component';
import { ShopStandartFormsComponent } from './pages/shop-standart-forms.component';
import { ShopTermsConditionsPageComponent } from './pages/shop-terms-conditions-page.component';
import { ShopWishlistComponent } from './pages/shop-wishlist.component';
import { ShopRegisterComponent } from './authentication/shop-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './authentication/forgetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopCheckoutComponent,
    ShopHomeComponent,
    ShopAboutComponent,
    ShopAccountComponent,
    ShopContactsComponent,
    ShopFaqComponent,
    ShopGoodsCompareComponent,
    ShopItemComponent,
    ShopPrivacyPolicyComponent,
    ShopProductListComponent,
    ShopSearchResultComponent,
    ShopShoppingCartComponent,
    ShopShoppingCartNullComponent,
    ShopStandartFormsComponent,
    ShopTermsConditionsPageComponent,
    ShopWishlistComponent,
    ShopRegisterComponent,
    ForgetpasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
