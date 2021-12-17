import { HbEventDriverService } from './../../../services/state/hb-event-driver.service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import { HbluxEventDriverConnexionService } from 'src/app/services/connexion/hbluxconnexion.service';
import { Clienthblux } from 'src/app/modele/clienthblux.modele';
import { ArticleActionEventTypesEnum, SourceDeProductionEnum } from 'src/app/states/article-state-enum.state';

@Component({
  selector: 'app-header-hblux-navbar',
  templateUrl: './header-hblux-navbar.component.html',
  styleUrls: ['./header-hblux-navbar.component.css']
})
export class HeaderHbluxNavbarComponent implements OnInit {
  compteClient:Clienthblux|null=null

  constructor(private router: Router,private eventDriverConnexionService:HbluxEventDriverConnexionService,
    private evenDriver:HbEventDriverService) {
  }

  ngOnInit(): void {

    this.evenDriver.sourceArticleSubjectObservable.subscribe(
      actionEvent=>{
       if(actionEvent.source==SourceDeProductionEnum.ConnexionComponent || actionEvent.source==SourceDeProductionEnum.NewCompteClientComponent){
        this.compteClient=actionEvent.payload
       }
      }
    )
    this.eventDriverConnexionService.sourceArticleSubjectObservable.subscribe(
      connexionAction=>{
        this.compteClient=connexionAction.payload

      }
    )


  }

  onSeConnecter() {
    this.router.navigateByUrl("connexion")

  }

  onMonEspace() {
    this.router.navigateByUrl("espaceclient/"+this.compteClient?.id)
  }

  onDeconnexion(){
    this.eventDriverConnexionService.compteClient=null
    this.eventDriverConnexionService.publishEvent({type:ArticleActionEventTypesEnum.DECONNEXION,
      source:SourceDeProductionEnum.HeaderNavbarComponent,payload:null})
  }

  onCreerUnCompte(){
    this.router.navigateByUrl("compte")
  }

}
