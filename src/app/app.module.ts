import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { PostlistComponent } from './postlist/postlist.component';
import { PostcreateComponent } from './postcreate/postcreate.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PostlistComponent
  },
  {
    path: 'new',
    component: PostcreateComponent
  },
  {
    path: 'posts/:slug',
    component: PostdetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostcreateComponent,
    PostdetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
