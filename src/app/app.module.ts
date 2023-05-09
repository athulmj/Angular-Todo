import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { SearchFilterPipe } from './search-filter.pipe';  //Material






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CardComponent,
    LoginComponent,
    SearchFilterPipe,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    DragDropModule   //Material
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
