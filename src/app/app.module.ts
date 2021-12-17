import {HeaderHbluxPresentationComponent} from './components/body/home/header-hblux-presentation/header-hblux-presentation.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderHbluxLogoComponent} from './components/header/header-hblux-logo/header-hblux-logo.component';
import {HeaderHbluxNavbarComponent} from './components/header/header-hblux-navbar/header-hblux-navbar.component';
import {HomeComponent} from './components/body/home/home.component';
import {MagasinComponent} from './components/body/magasin/magasin.component';
import {DetailArticleComponent} from './components/body/detail-article/detail-article.component';
import {AproposComponent} from './components/body/apropos/apropos.component';
import {ContactComponent} from './components/body/contact/contact.component';
import {PersonneComponent} from './components/body/personne/personne.component';
import {EventsComponent} from './components/body/events/events.component';
import {HomeMagasinComponent} from './components/body/home/home-magasin/home-magasin.component';
import {HomeGammeComponent} from './components/body/home/home-gamme/home-gamme.component';
import {HomeNewsLetterComponent} from './components/body/home/home-news-letter/home-news-letter.component';
import {HomeEventsComponent} from './components/body/home/home-events/home-events.component';
import {ConnexionComponent} from './components/body/connexion/connexion.component';
import {NewCompteComponent} from './components/body/new-compte/new-compte.component';
import {NewArticleComponent} from './components/body/new-article/new-article.component';
import {RenovationComponent} from './components/body/renovation/renovation.component';
import {PanierComponent} from './components/body/panier/panier.component';
import {PaiementComponent} from './components/body/paiement/paiement.component';
import { EspaceClientComponent } from './components/body/espace-client/espace-client.component';
import { AddPhotoArticleComponent } from './components/body/add-photo-article/add-photo-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HeaderHbluxLogoComponent,
    HeaderHbluxNavbarComponent,
    HeaderHbluxPresentationComponent,
    HomeComponent,
    MagasinComponent,
    DetailArticleComponent,
    AproposComponent,
    ContactComponent,
    PersonneComponent,
    EventsComponent,
    HomeMagasinComponent,
    HomeGammeComponent,
    HomeNewsLetterComponent,
    HomeEventsComponent,
    ConnexionComponent,
    NewCompteComponent,
    RenovationComponent,
    PanierComponent,
    PaiementComponent,
    EspaceClientComponent,
    NewArticleComponent,
    AddPhotoArticleComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
