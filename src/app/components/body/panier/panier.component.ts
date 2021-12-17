import { HbluxTraitementService } from './../../../services/traitement/hblux-traitement.service';
import { ArticleCommandee } from './../../../modele/articlecommande.modele';
import {Router} from '@angular/router';
import {HbEventDriverService} from './../../../services/state/hb-event-driver.service';
import {Component, OnInit} from '@angular/core';
import {ArticleActionEventTypesEnum, SourceDeProductionEnum} from 'src/app/states/article-state-enum.state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  articleAcheter: ArticleCommandee[] = [];
  nombreProduit: number = 0

  constructor(private router: Router, private eventDriverService: HbEventDriverService,
    private traitementService:HbluxTraitementService) {
  }

  ngOnInit(): void {
    this.eventDriverService.sourceArticleSubjectObservable.subscribe(
      actionEvent => {

        if (actionEvent.type == ArticleActionEventTypesEnum.ACHETERUNARTICLE) {
          console.log("je suis au panier")
        let  articleCommande:ArticleCommandee=this.traitementService.onClickAcheterUnArticle(actionEvent.payload);
          this.articleAcheter.push(articleCommande)
          this.nombreProduit = this.articleAcheter.length
        }

      }
    )
  }

  onPasserALaCaisse() {

    this.eventDriverService.setArticlesCommandees(this.articleAcheter)
    this.eventDriverService.publishEvent(
      {
        type: ArticleActionEventTypesEnum.PAIEMENT,
        source: SourceDeProductionEnum.PANIERCOMPONENT,
        payload: this.articleAcheter
      }
    )
    this.router.navigateByUrl("paiement")
  }

}
