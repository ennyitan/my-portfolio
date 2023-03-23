import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ButtonComponent } from './shared/button/button.component';
import { SlidesComponent } from './shared/slides/slides.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardsComponent } from './shared/cards/cards.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ButtonComponent,
    SlidesComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
