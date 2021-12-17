import {HbEventDriverService} from './../../../services/state/hb-event-driver.service';
import {Hbmedia} from './../../../modele/hbmedia.modele';
import {Article} from './../../../modele/article.modele';
import {Component, OnInit} from '@angular/core';
import {HbluxArticleService} from 'src/app/services/hblux-article.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ArticleActionEventTypesEnum, SourceDeProductionEnum} from 'src/app/states/article-state-enum.state';

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.css']
})
export class MagasinComponent implements OnInit {

  articles: Article[] | null = null
  medias: Hbmedia[] | null = null
  articleSubscription: Subscription | null = null

  constructor(private articleService: HbluxArticleService,
              private router: Router,
              private hbeventDriverService: HbEventDriverService) {
  }

  ngOnInit(): void {
    this.articleSubscription = this.articleService.articlesSubjects.subscribe(
      (articles: Article[]) => {
        this.articles = articles

      }
    )
    this.articleService.emitArticle();
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.findArticleAll()
      .subscribe(data => {
        this.articles = data
        console.log(this.articles)
      })
  }

  getAllHbMedia(id: number) {
    this.articleService.findHbMediaAll()
      .subscribe(
        data => {
          this.medias = data.filter(d => d.article.id == id)
        }
      )
  }

  getArticleById(article: Article) {
    this.hbeventDriverService.setOneArticle(article)
    this.router.navigateByUrl("details-article/" + article.id)
  }

  getMedia(id: number) {
    this.articleService.findHbMediaAll()
      .subscribe(
        data => {
          this.medias = data.filter(d => d.article.id == id)
        }
      )
    return true;
  }

  onAcheterArticle(article: Article) {
    this.hbeventDriverService.publishEvent(
      {
        type: ArticleActionEventTypesEnum.ACHETERUNARTICLE,
        source: SourceDeProductionEnum.MAGASINCOMPONENT, payload: article
      }

    );
  }
}
