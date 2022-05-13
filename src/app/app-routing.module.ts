import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IniciComponent } from  "./components/pages/inici/inici.component";
import { ContacteComponent } from  "./components/pages/contacte/contacte.component";
import { FaqsComponent } from  "./components/pages/faqs/faqs.component";
import { RegistreComponent } from  "./components/pages/registre/registre.component";
import { DocumentsComponent } from  "./components/pages/documents/documents.component";
import { LocalsComponent } from  "./components/pages/locals/locals.component";
import { NoticiesComponent } from  "./components/pages/noticies/noticies.component";

const routes: Routes = [

  {path: 'inici', component: IniciComponent},
  {path: 'contacte', component: ContacteComponent},
  {path: 'locals', component: LocalsComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'registre', component: RegistreComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'noticies', component: NoticiesComponent},

  {path: '**', redirectTo: '/inici', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
