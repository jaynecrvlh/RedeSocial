import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';;

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinhaTempoComponent } from './linha-tempo/linha-tempo.component';
import { PostComponent } from './post/post.component';
import { routing } from './app.routing';
import { NovoPostComponent } from './novo-post/novo-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinhaTempoComponent,
    PostComponent,
    NovoPostComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
