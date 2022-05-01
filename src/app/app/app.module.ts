import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavComponent } from './componets/shared/nav/nav.component';
import { BookstoreAppComponent } from './componets/bookstore-app/bookstore-app.component';

import { ProductListComponent } from './componets/bookstore-app/product-list/product-list.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componets/shared/header/header.component';
import { FooterComponent } from './componets/shared/footer/footer.component';
import { FiltersComponent } from './componets/bookstore-app/filters/filters.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductItemComponent } from './component/boockstore-app/product-list/product-item/product-item.component';
import { BooksService } from './componets/bookstore-app/product-list/product-list.component.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    FiltersComponent,
    ProductItemComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
