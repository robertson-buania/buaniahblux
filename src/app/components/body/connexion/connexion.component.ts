import { HbEventDriverService } from './../../../services/state/hb-event-driver.service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HbluxArticleService } from 'src/app/services/hblux-article.service';
import { HbluxEventDriverConnexionService } from 'src/app/services/connexion/hbluxconnexion.service';
import { ArticleActionEventTypesEnum, SourceDeProductionEnum } from 'src/app/states/article-state-enum.state';
import { Clienthblux } from 'src/app/modele/clienthblux.modele';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  reactiveFormConnexion: FormGroup | null = null
  message: string | null = null
  compteClient:Clienthblux|null=null
  sourceComponent:SourceDeProductionEnum=SourceDeProductionEnum.ConnexionComponent

  constructor(private fb: FormBuilder, private router: Router,private hbluxService:HbluxArticleService,
    private hbluxEventDriverConnexionService:HbluxEventDriverConnexionService,
    private eventDriverService:HbEventDriverService) {
  }

  ngOnInit(): void {

    this.initReactiveFormConnexion()
    console.log(this.reactiveFormConnexion)
  }

  initReactiveFormConnexion() {
    this.reactiveFormConnexion = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required]]
    })
  }

  onSeconnecter() {
    if (this.reactiveFormConnexion?.valid) {

    this.hbluxService.getAllClienthblux().subscribe(
      clients=>{
        clients.forEach( client=>{
          if(client.email==this.reactiveFormConnexion?.value.email && client.motDePasse==this.reactiveFormConnexion?.value.motDePasse){

            this.compteClient=client;
            this.publierConnexion()

            this.router.navigateByUrl("home")
          }
        })
      }, (error=>{
        this.compteClient=null
      })
    )
  
    } else {
      this.message = "Veiller remplir le formulaire"
      setTimeout(() => {
        this.message = null
      }, (3000));
    }
  }

  motDePasseOublie() {
    this.router.navigateByUrl('connexion')
  }

  publierConnexion() {
    if(this.compteClient)
        this.eventDriverService.setClientHblux(this.compteClient)
        this.eventDriverService.publishEvent(
          {
            type: ArticleActionEventTypesEnum.CONNEXION,
            source: SourceDeProductionEnum.ConnexionComponent,
            payload: this.compteClient
          }
        )
      }
}
