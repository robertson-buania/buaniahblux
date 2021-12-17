import { ArticleCommandee } from './../../modele/articlecommande.modele';
import { Article } from 'src/app/modele/article.modele';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HbluxTraitementService {

  constructor() { }

  onClickAcheterUnArticle(article:Article):ArticleCommandee{
    return {
      nomArticle:article.nom,
      prix:article.prix,
      quantite:1,
      photos:article.hbmediaSet,
      type:article.type
    }
  }
}
