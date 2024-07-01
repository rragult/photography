import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './Auth/auth.component';
import { AuthGuard } from './Auth/auth.guard';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MygearComponent } from './mygear/mygear.component';
import { BirdComponent } from './shop/bird/bird.component';
import { LandscapeComponent } from './shop/landscape/landscape.component';
import { MacroComponent } from './shop/macro/macro.component';
import { PortraitsComponent } from './shop/portraits/portraits.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'About', component: AboutComponent},
  {path:'shop', component: ShopComponent, children:[
    {path:'landscape', component: LandscapeComponent},
    {path:'bird', component: BirdComponent},
    {path:'macro', component: MacroComponent},
    {path:'portraits', component: PortraitsComponent}
  ]},
  {path:'about', component: AboutComponent},
  {path:'blog', component: BlogComponent},
  {path:'contact', component: ContactComponent},
  {path: 'mygear', component: MygearComponent},

  {path:'login', component: AuthComponent},
  
  {path:'auth', component: AuthComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
