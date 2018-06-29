import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItempageComponent } from './itempage/itempage.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { RegisterComponent } from './loginregister/register/register.component';
import { CreatelistingComponent } from './createlisting/createlisting.component';
import { CreateauctionComponent } from './createauction/createauction.component';

const routes: Routes = [
  {path: 'item/:id', component:ItempageComponent},
  {path: 'home', component:HomeComponent },
  {path: 'profile', component:ProfileComponent },
  {path: 'cart', component:ShoppingcartComponent},
  {path: 'createlisting', component:CreatelistingComponent},
  {path: 'createauction', component:CreateauctionComponent},
  {path: 'account', component:LoginregisterComponent, children:[{path:'register',component:RegisterComponent, outlet: 'popup'}]},
  {path: '', pathMatch:'full', redirectTo:'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
