import {Subscription} from 'rxjs';
import {Article} from './../../../modele/article.modele';
import {HbluxArticleService} from 'src/app/services/hblux-article.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HbEventDriverService } from 'src/app/services/state/hb-event-driver.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  articleSet?: any
  productId: any
  url: any

  constructor(private activatedRoute:ActivatedRoute,
    private hbEventDriverService:HbEventDriverService,private hbluxService:HbluxArticleService) {
      this.productId=this.activatedRoute.snapshot.paramMap.get("id")

  }


  ngOnInit(): void {


this.hbluxService.getArticleById(this.productId)
      .subscribe(
        data=>{this.articleSet=data}
      )

  }

}
