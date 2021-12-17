import { HbluxArticleService } from 'src/app/services/hblux-article.service';
import {ArticleCommandee} from './../../../modele/articlecommande.modele';
import {Router} from '@angular/router';
import {HbLuxActionEvent, ArticleActionEventTypesEnum} from './../../../states/article-state-enum.state';
import {HbEventDriverService} from './../../../services/state/hb-event-driver.service';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HbluxEventDriverConnexionService } from 'src/app/services/connexion/hbluxconnexion.service';
import{render} from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  payer = false
  sommeApayer=2500;
  message:string|null=null
  clienthblux:any

  //readonly ArticleActionEventTypesEnum=ArticleActionEventTypesEnum
  listeArticleCommandees: ArticleCommandee[] = []

  constructor(private router: Router, private hbEventDriverService: HbEventDriverService,
    private hbluxConnexionService:HbluxEventDriverConnexionService,private hbluxService:HbluxArticleService ) {
  }

integrePaypal(){
  render(
    {
      id:"#myPaypalButtons",
      currency:"USD",
      value:"100.00",
      onApprove:(details)=>{
        alert('La transaction a reussi')
      }
    }
  )
}

@ViewChild('paypalRef',{static:true})private paypalRef?:ElementRef
  ngOnInit(): void {
    window.paypal.Buttons(
      {
        style:{layout:"horizontal",

                label:'paypal'
              },
        createOrder:(data:any,actions:any)=>{
          return actions.order.create({
            purchase_units:[
              {
                amount:{
                  value:""+this.sommeApayer+"",
                  currency_code:"USD"
                }
              }
            ]
          });
        },
        onApprouve:(data:any,actions:any)=>{
          return actions.order.capture().then((details:any)=>{
            alert("Confimer")
            console.log("Votre paiement est effectué avec succès")
          })
        },
        onError:(error:any)=>{
          console.log('Erreur de transaction')
        }
      }
    ).render(
      this.paypalRef?.nativeElement)


    this.listeArticleCommandees=this.hbEventDriverService.getAllArticleCommandee()
    this.calculSommeApayer()
    this.clienthblux=this.hbEventDriverService.getAllClienthblux()
    this.hbEventDriverService.sourceArticleSubjectObservable.subscribe(
      actionEvent => {
        this.filtreurTypeComposant(actionEvent)
        this.calculSommeApayer()
        if(actionEvent.type==ArticleActionEventTypesEnum.CONNEXION){
          this.clienthblux=actionEvent.payload
        }
      }
    )

  }

  filtreurTypeComposant(actionEvent: HbLuxActionEvent) {
    if (actionEvent.type == ArticleActionEventTypesEnum.PAIEMENT) {
      //this.listeArticleCommandees=actionEvent.payload
      // this.listeArticleCommandees=this.hbEventDriverService.getAllArticleCommandee()
    }

  }

  seConnecter() {
    this.router.navigateByUrl("connexion")

  }
  calculSommeApayer(){

    this.sommeApayer=this.listeArticleCommandees.map( (e)=> e.prix*e.quantite )
    .reduce((acc,v)=>(acc+=v),0)
console.log("Somme terminer ",this.sommeApayer)
  }


  payerdirectement() {
    this.payer = true;
  }

  preCommander(){

      if(this.clienthblux){
      this.hbluxService.updateClienthblux(this.clienthblux)
      .subscribe(
        client=>{
          this.message="Réservation validé Continuez votre viste au magasin"

          setTimeout( ()=>{
            this.router.navigateByUrl("magasin")
            this.message=null
          } ,3000)
          console.log("Réservation validé, Vérifier votre boite mail")
        }
      )

      }else{
        this.message="Veillez vous connecter d'abord"
        this.router.navigateByUrl("connexion")
    setTimeout( ()=>{
      this.message=null
    } ,3000)
      }

   }

   onChangeQuantite(event:any){
     console.log(event.target)
   }

}
