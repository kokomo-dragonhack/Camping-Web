import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as fromComponents from './components';
import { ServicesModule } from './services/services.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        fromComponents.HeaderComponent,
        fromComponents.FooterComponent,
        fromComponents.PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        LazyLoadImageModule,
        HttpClientModule,
        ServicesModule,
        fromComponents.HomePageModule,
        fromComponents.MapsModule,
        fromComponents.AuthModule,
        fromComponents.CampsModule,
        fromComponents.ReservationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
