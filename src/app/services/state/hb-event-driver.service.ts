import { Clienthblux } from 'src/app/modele/clienthblux.modele';
import { Article } from './../../modele/article.modele';
import {ArticleCommandee} from './../../modele/articlecommande.modele';
import {HbLuxActionEvent} from './../../states/article-state-enum.state';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HbEventDriverService {

  articleDetails:any
  allArticles:Article[]=[]

  articleCommandee: ArticleCommandee[] = []

  clientHlux?: Clienthblux
  sourceArticleSubject: Subject<HbLuxActionEvent> = new Subject<HbLuxActionEvent>()
  sourceArticleSubjectObservable = this.sourceArticleSubject.asObservable()

  publishEvent(event: HbLuxActionEvent) {
    this.sourceArticleSubject.next(event)
  }

  addToArticleCommandee(article: ArticleCommandee) {
    this.articleCommandee.push(article)
  }
  addToClientHblux(clienthb: Clienthblux) {
    this.clientHlux=clienthb
  }
  set newTabArticleCommandee(article: ArticleCommandee[]) {
    this.articleCommandee = article
  }

  getAllArticleCommandee() {
    return this.articleCommandee
  }
  getAllClienthblux() {
    return this.clientHlux
  }

  setArticles(articles:Article[]){
    this.allArticles=articles
  }

  getArticles(){
    return this.allArticles
  }
  setArticlesCommandees(articlesCommandes:ArticleCommandee[]){
    this.articleCommandee=articlesCommandes
  }


  setClientHblux(articlesCommandes:Clienthblux){
    this.clientHlux=articlesCommandes
  }


  setOneArticle(article:Article){
    this.articleDetails

    console.log("set One article ",article)
  }

  getOneArticle(){
    console.log("get One article ",this.articleDetails)
    return this.articleDetails
  }


}
