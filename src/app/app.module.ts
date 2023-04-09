import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardMaskPipe } from './card-mask.pipe';
import { ConvertCasePipe } from './convert-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardMaskPipe,
    ConvertCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
