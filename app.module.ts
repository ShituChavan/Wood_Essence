import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { ConvertToSpace } from './dash_to_space_pipe';
import { ProductComponent } from './product/product.component';
import { StarComponent } from './star/star.component';
import { HomeComponent } from './home/home.component';
import { ProductserviceService } from './product/productservice.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes : Routes=[
  {path: 'home' ,component:HomeComponent},
  {path: 'products' ,component:ProductComponent},
  {path: 'product/:id' ,component:ProductDetailComponent},
  {path: 'aboutUs',component:AboutUsComponent},
  {path: 'help',component:HelpComponent},
  {path: 'buy',component:BuyNowComponent},
  {path: 'profile' ,component:ProfileComponent},
  {path : 'register',component:RegisterComponent},
  {path: '',redirectTo:'/home',pathMatch:"full"},
  {path: '**',redirectTo:'/home',pathMatch:"full"}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ConvertToSpace,
    StarComponent,
    HomeComponent,
    AboutUsComponent,
    HelpComponent,
    BuyNowComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
