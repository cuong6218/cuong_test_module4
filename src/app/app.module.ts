import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AwesomeUpdateComponent } from './awesome-update/awesome-update.component';
import { AwesomeCreateComponent } from './awesome-create/awesome-create.component';
@NgModule({
  declarations: [
    AppComponent,
    AwesomeListComponent,
    AwesomeUpdateComponent,
    AwesomeCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
