import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CryptService } from './crypt.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItempageComponent } from './itempage/itempage.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { RegisterComponent } from './loginregister/register/register.component';
import { CreatelistingComponent } from './createlisting/createlisting.component';
import { CreateauctionComponent } from './createauction/createauction.component';

@NgModule({
  declarations: [
    AppComponent,
    ItempageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    ShoppingcartComponent,
    LoginregisterComponent,
    RegisterComponent,
    CreatelistingComponent,
    CreateauctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [CryptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
