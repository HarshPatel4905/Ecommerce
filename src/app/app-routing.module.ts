import { ShopAccountComponent } from './pages/shop-account.component';
import { ShopAboutComponent } from './pages/shop-about.component';
import { ShopHomeComponent } from './pages/shop-home.component';
import { ShopCheckoutComponent } from './pages/shop-checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'checkout', component: ShopCheckoutComponent },
  { path: '', component: ShopHomeComponent },
  { path: 'about', component: ShopAboutComponent },
  { path: 'account', component: ShopAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
