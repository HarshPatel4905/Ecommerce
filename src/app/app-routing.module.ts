import { ShopHomeComponent } from './pages/shop-home.component';
import { ShopCheckoutComponent } from './pages/shop-checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'checkout', component:ShopCheckoutComponent},
  {path:'', component:ShopHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
