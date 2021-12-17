import { Router } from '@angular/router';
import { ArticleActionEventTypesEnum, SourceDeProductionEnum } from './../../../../states/article-state-enum.state';
import { HbEventDriverService } from './../../../../services/state/hb-event-driver.service';
import {Article} from './../../../../modele/article.modele';
import {Subscription} from 'rxjs';
import {HbluxArticleService} from 'src/app/services/hblux-article.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-magasin',
  templateUrl: './home-magasin.component.html',
  styleUrls: ['./home-magasin.component.css']
})
export class HomeMagasinComponent implements OnInit {

  article: Article | null = null
  articleSubscriprion: Subscription | null = null

  constructor(private router:Router,private hbluxservice: HbluxArticleService,private hbeventDriverService:HbEventDriverService) {
  }

  ngOnInit(): void {
    this.articleSubscriprion = this.hbluxservice.findArticleAll()
      .subscribe(
        data => {
          this.article = data[0]
          this.hbluxservice.emitArticle();
        }
      )
    console.log("hjklmmmdfd" + this.article)

  }

  acheterpanier() {

    this.router.navigateByUrl("magasin")

  }
  voirmagasin(){
    this.router.navigateByUrl("magasin")

  }
}
