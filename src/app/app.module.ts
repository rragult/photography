import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './home/banner/banner.component';
import { ListComponent } from './home/list/list.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { LandscapeComponent } from './shop/landscape/landscape.component';
import { BirdComponent } from './shop/bird/bird.component';
import { MacroComponent } from './shop/macro/macro.component';
import { PortraitsComponent } from './shop/portraits/portraits.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { loadingSpinner } from './shared/loading-spinner.component';
import { AuthComponent } from './Auth/auth.component';
import { AuthInterceptorService } from './Auth/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MygearComponent } from './mygear/mygear.component';
import { SearchComponent } from './search/search.component';
import { MailShortPipePipe } from './pipes/mail-short-pipe.pipe';
// import { AuthInterceptorService } from './Auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ShopComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    BannerComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    LandscapeComponent,
    BirdComponent,
    MacroComponent,
    PortraitsComponent,
    loadingSpinner,
    AuthComponent,
    MygearComponent,
    SearchComponent,
    MailShortPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
