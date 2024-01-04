import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { QRCODEComponent } from './qrcode/qrcode.component';
import { RoutingModule } from './routing/routing.module';
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [AppComponent, QRCODEComponent, MusicComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
