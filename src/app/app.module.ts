import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ShowItemComponent } from './show-item/show-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    ShowItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  