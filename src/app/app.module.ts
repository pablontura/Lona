import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IniciComponent } from './components/pages/inici/inici.component';
import { LocalsComponent } from './components/pages/locals/locals.component';
import { ContacteComponent } from './components/pages/contacte/contacte.component';
import { FaqsComponent } from './components/pages/faqs/faqs.component';
import { RegistreComponent } from './components/pages/registre/registre.component';
import { DocumentsComponent } from './components/pages/documents/documents.component';
import { NoticiesComponent } from './components/pages/noticies/noticies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IniciComponent,
    LocalsComponent,
    ContacteComponent,
    FaqsComponent,
    RegistreComponent,
    DocumentsComponent,
    NoticiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
