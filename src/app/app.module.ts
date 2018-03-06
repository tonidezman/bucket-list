import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthorizationService } from './authorization.service';
import { BucketService } from './bucket/bucket.service';
import { AppComponent } from './app.component';
import { BucketListComponent } from './bucket/bucket-list/bucket-list.component';
import { AllBucketsComponent } from './bucket/all-buckets/all-buckets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewBucketComponent } from './bucket/new-bucket/new-bucket.component';
import { LoginComponent } from './bucket/login/login.component';
import { BucketDetailComponent } from './bucket/bucket-detail/bucket-detail.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'buckets/new',
    component: NewBucketComponent,
    canActivate: [AuthorizationService]
  },
  {
    path: 'buckets',
    component: BucketListComponent,
    canActivate: [AuthorizationService]
  },
  {
    path: 'buckets/:id',
    component: BucketDetailComponent,
    canActivate: [AuthorizationService]
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
    NewBucketComponent,
    LoginComponent,
    BucketDetailComponent
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
  providers: [BucketService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
