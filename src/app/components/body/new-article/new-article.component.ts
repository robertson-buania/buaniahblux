import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HbluxArticleService } from 'src/app/services/hblux-article.service';
import { HbluxEventDriverConnexionService } from 'src/app/services/connexion/hbluxconnexion.service';
import { ArticleActionEventTypesEnum, SourceDeProductionEnum } from 'src/app/states/article-state-enum.state';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  reactiveFormNewArticle: FormGroup | null = null
  message: string | null = null


  constructor(private fb: FormBuilder, private router: Router,
    private hbluxService:HbluxArticleService) {
  }

  ngOnInit(): void {
    /* this.eventDriverConnexionService.sourceArticleSubjectObservable.subscribe(
      connexion=>{
        if(connexion.source==SourceDeProductionEnum.HeaderNavbarComponent){
          this.navigateSource="magasin"
        }else if(connexion.source==SourceDeProductionEnum.PAIEMENTCOMPONENT ){
          this.navigateSource="paiement"
        }
      }
    ) */
    this.initreactiveFormNewArticle()
   // console.log(this.reactiveFormNewArticle)
  }

  initreactiveFormNewArticle() {
    this.reactiveFormNewArticle = this.fb.group({
      nom: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      type: ['enfant', [Validators.required]],
      quantite: [1, [Validators.required]],
      disponible: [true, [Validators.required]],

      promotion: [true, [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  onCreerNewArticle() {
   // console.log(this.reactiveFormNewArticle?.value)

    if (this.reactiveFormNewArticle?.valid) {
      this.message=null

      this.hbluxService.newClienthblux(this.reactiveFormNewArticle.value)
        .subscribe(
          clientArticle=>{
            this.hbluxService.newArticle(this.reactiveFormNewArticle?.value)
              .subscribe(
                data=>{

                 // this.message="L'article "+data.nom+" est bien enregistrer, vous serez dirigé vers l'enregistrement de ses photos"

                 // this.initreactiveFormNewArticle()
                  this.router.navigateByUrl("addphoto/"+data.id)
                }
              )
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

}
