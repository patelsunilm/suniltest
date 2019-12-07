import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './main/login/login.module';
import { ProdctModule } from './main/product/product.module';
import {updateproductModule} from './main/updateproduct/updateproduct.module';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import{productService} from '../app/services/product.service'
import { from } from 'rxjs';

const appRoutes: Routes = [
  {
      path      : '**',
      redirectTo: 'login'
  }
];


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true,onSameUrlNavigation: 'reload'}),

    BrowserModule,ProdctModule,FormsModule,ReactiveFormsModule,HttpClientModule,updateproductModule,
    AppRoutingModule,LoginModule
  ],
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule { }
