import { HbEventDriverService } from 'src/app/services/state/hb-event-driver.service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HbluxArticleService } from 'src/app/services/hblux-article.service';
import { HbluxEventDriverConnexionService } from 'src/app/services/connexion/hbluxconnexion.service';
import { ArticleActionEventTypesEnum, SourceDeProductionEnum } from 'src/app/states/article-state-enum.state';

@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.component.html',
  styleUrls: ['./new-compte.component.css']
})
export class NewCompteComponent implements OnInit {

  reactiveFormNewCompte: FormGroup | null = null
  message: string | null = null
  readonly ArticleActionEventTypesEnum=ArticleActionEventTypesEnum
  readonly SourceDeProductionEnum=SourceDeProductionEnum
  navigateSource=""

  constructor(private fb: FormBuilder, private router: Router,
    private hbluxService:HbluxArticleService,
    private eventDriverConnexionService:HbluxEventDriverConnexionService,private eventDriver:HbEventDriverService) {
  }

  ngOnInit(): void {
    this.eventDriverConnexionService.sourceArticleSubjectObservable.subscribe(
      connexion=>{
        if(connexion.source==SourceDeProductionEnum.HeaderNavbarComponent){
          this.navigateSource="magasin"
        }else if(connexion.source==SourceDeProductionEnum.PAIEMENTCOMPONENT ){
          this.navigateSource="paiement"
        }
      }
    )
    this.initreactiveFormNewCompte()
   // console.log(this.reactiveFormNewCompte)
  }

  initreactiveFormNewCompte() {
    this.reactiveFormNewCompte = this.fb.group({
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      sexe: ['homme', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      motDePasse: ['', [Validators.required]],
      confirmer: ['', [Validators.required]]
    })
  }

  onCreerNewCompte() {
    console.log(this.reactiveFormNewCompte?.value)

    if (this.reactiveFormNewCompte?.valid) {
      this.message=null

      this.hbluxService.newClienthblux(this.reactiveFormNewCompte.value)
        .subscribe(
          clientCompte=>{
            this.eventDriver.clientHlux=clientCompte
            this.eventDriver.publishEvent({type:ArticleActionEventTypesEnum.CREATIONCOMPTECLIIENT,
              source:SourceDeProductionEnum.NewCompteClientComponent,payload:clientCompte})


            this.router.navigateByUrl(this.navigateSource)
          }
        )
    } else {
      this.message = "Veiller remplir le formulaire"
      setTimeout(() => {
        this.message = null
      }, (3000));
    }
  }

  onSeConnecter() {
    this.router.navigateByUrl("connexion")
  }

  initialiserToutChamp(){


  }
}
