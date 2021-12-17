import {PaiementComponent} from './components/body/paiement/paiement.component';
import {NewCompteComponent} from './components/body/new-compte/new-compte.component';
import {RenovationComponent} from './components/body/renovation/renovation.component';
import {ConnexionComponent} from './components/body/connexion/connexion.component';
import {PersonneComponent} from './components/body/personne/personne.component';
import {DetailArticleComponent} from './components/body/detail-article/detail-article.component';
import {ContactComponent} from './components/body/contact/contact.component';
import {AproposComponent} from './components/body/apropos/apropos.component';

import {EventsComponent} from './components/body/events/events.component';
import {MagasinComponent} from './components/body/magasin/magasin.component';
import {HomeComponent} from './components/body/home/home.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EspaceClientComponent } from './components/body/espace-client/espace-client.component';
import { NewArticleComponent } from './components/body/new-article/new-article.component';
import { AddPhotoArticleComponent } from './components/body/add-photo-article/add-photo-article.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "magasin", component: MagasinComponent},
  {path: "events", component: EventsComponent},
  {path: "apropos", component: AproposComponent},
 // {path: "details-article/:id", component: DetailArticleComponent},
  {path: "contact", component: ContactComponent},
  {path: "compte", component: NewCompteComponent},
  {path: "personne", component: PersonneComponent},
  {path: "connexion", component: ConnexionComponent},
  {path: "renovation", component: RenovationComponent},
  {path: "paiement", component: PaiementComponent},
  //{path:"espaceclient/:id",component:EspaceClientComponent},
  //{path:"newarticle",component:NewArticleComponent},
  //{path:"addphoto/:idclient",component:AddPhotoArticleComponent},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
