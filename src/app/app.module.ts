import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BucketListComponent } from './bucket/bucket-list/bucket-list.component';
import { AllBucketsComponent } from './bucket/all-buckets/all-buckets.component';


@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    AllBucketsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
