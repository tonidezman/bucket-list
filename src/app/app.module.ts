import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BucketService } from './bucket/bucket.service';
import { AppComponent } from './app.component';
import { BucketListComponent } from './bucket/bucket-list/bucket-list.component';
import { AllBucketsComponent } from './bucket/all-buckets/all-buckets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewBucketComponent } from './bucket/new-bucket/new-bucket.component';

const appRoutes: Routes = [
  {
    path: 'buckets/new',
    component: NewBucketComponent
  },
  {
    path: 'buckets',
    component: BucketListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    AllBucketsComponent,
    PageNotFoundComponent,
    NewBucketComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BucketService],
  bootstrap: [AppComponent]
})
export class AppModule {}