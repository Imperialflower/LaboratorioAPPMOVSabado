import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
>>>>>>> ba67054aa114e8ad4e647379d009e1023e4be870

import { HttpClientModule } from '@angular/common/http';
import { RegistrarPage } from './auth/registrar/registrar.page';

@NgModule({
<<<<<<< HEAD
  declarations: [ AppComponent, RegistrarPage],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule
          ],
=======
  declarations: [AppComponent,RegistrarPage],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],
>>>>>>> ba67054aa114e8ad4e647379d009e1023e4be870
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
