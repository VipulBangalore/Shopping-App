import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FilterPipe } from './pipes/filter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgpSortModule } from 'ngp-sort-pipe';
import {ProductdetailsService} from './productdetails.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgpSortModule
  ],
  providers: [ProductdetailsService],
  exports: [
    // ...
    FilterPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
