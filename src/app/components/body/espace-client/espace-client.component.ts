import { ActivatedRoute } from '@angular/router';
import { SourceDeProductionEnum } from './../../../states/article-state-enum.state';
import { HbEventDriverService } from './../../../services/state/hb-event-driver.service';
import { Clienthblux } from './../../../modele/clienthblux.modele';
import { HbluxArticleService } from './../../../services/hblux-article.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-EspaceClient',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {

  clientHblux?:Clienthblux
  idClient:any
  clientsHblux:Clienthblux[]|null=null
  constructor(private hbluxService:HbluxArticleService,
    private activatedRoute:ActivatedRoute, private evenDriver:HbEventDriverService) {
  }

  ngOnInit(): void {
    this.idClient=this.activatedRoute.snapshot.paramMap.get("id")
    this.hbluxService.getAllClienthblux()
    .subscribe(data=>{
      data.forEach(
        clie=>{
          if(clie.id==this.idClient){
            this.clientHblux=clie
          }
        }
      )
    })
  }

}
