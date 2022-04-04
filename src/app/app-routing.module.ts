import { ForgetpasswordComponent } from './authentication/forgetpassword.component';
import { ShopRegisterComponent } from './authentication/shop-register.component';
import { ShopWishlistComponent } from './pages/shop-wishlist.component';
import { ShopTermsConditionsPageComponent } from './pages/shop-terms-conditions-page.component';
import { ShopStandartFormsComponent } from './pages/shop-standart-forms.component';
import { ShopShoppingCartNullComponent } from './pages/shop-shopping-cart-null.component';
import { ShopShoppingCartComponent } from './pages/shop-shopping-cart.component';
import { ShopSearchResultComponent } from './pages/shop-search-result.component';
import { ShopProductListComponent } from './pages/shop-product-list.component';
import { ShopPrivacyPolicyComponent } from './pages/shop-privacy-policy.component';
import { ShopItemComponent } from './pages/shop-item.component';
import { ShopGoodsCompareComponent } from './pages/shop-goods-compare.component';
import { ShopFaqComponent } from './pages/shop-faq.component';
import { ShopContactsComponent } from './pages/shop-contacts.component';
import { ShopAccountComponent } from './pages/shop-account.component';
import { ShopAboutComponent } from './pages/shop-about.component';
import { ShopHomeComponent } from './pages/shop-home.component';
import { ShopCheckoutComponent } from './pages/shop-checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'shop-checkout', component: ShopCheckoutComponent },
  { path: '', component: ShopHomeComponent },
  { path: 'about', component: ShopAboutComponent },
  { path: 'account', component: ShopAccountComponent },
  { path: 'contacts', component: ShopContactsComponent },
  { path: 'shop-faq', component: ShopFaqComponent },
  { path: 'shop-goods-compare', component: ShopGoodsCompareComponent },
  { path: 'shop-item', component: ShopItemComponent },
  { path: 'shop-privacy-policy', component: ShopPrivacyPolicyComponent },
  { path: 'shop-product-list', component: ShopProductListComponent },
  { path: 'shop-search-result', component: ShopSearchResultComponent },
  { path: 'shop-shopping-cart', component: ShopShoppingCartComponent },
  { path: 'shop-standart-forms', component: ShopStandartFormsComponent },
  { path: 'shop-shopping-cart-null', component: ShopShoppingCartNullComponent },
  { path: 'shop-register', component: ShopRegisterComponent },
  { path: 'shop-forgetpassword', component: ForgetpasswordComponent },

  {
    path: 'shop-terms-conditions-page',
    component: ShopTermsConditionsPageComponent,
  },
  { path: 'shop-wishlist', component: ShopWishlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
