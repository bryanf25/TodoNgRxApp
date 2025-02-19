import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    provideStoreDevtools({
    maxAge: 25, // Retains last 25 states
    logOnly: !isDevMode(), // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    connectInZone: true // If set to true, the connection is established within the Angular zone
  })],
  bootstrap: [AppComponent]
})
export class AppModule { }
