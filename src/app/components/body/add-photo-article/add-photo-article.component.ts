import { Hbmedia } from './../../../modele/hbmedia.modele';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Article } from './../../../modele/article.modele';
import { Router, ActivatedRoute } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HbluxArticleService } from 'src/app/services/hblux-article.service';
import { HbluxEventDriverConnexionService } from 'src/app/services/connexion/hbluxconnexion.service';
import { ArticleActionEventTypesEnum, SourceDeProductionEnum } from 'src/app/states/article-state-enum.state';

@Component({
  selector: 'app-add-photo-article',
  templateUrl: './add-photo-article.component.html',
  styleUrls: ['./add-photo-article.component.css']
})
export class AddPhotoArticleComponent implements OnInit {

  progress=0
  article:Article|null=null
  reactiveFormAddPhotoToArticle: FormGroup | null = null
  message: string | null = null
  readonly ArticleActionEventTypesEnum=ArticleActionEventTypesEnum
  readonly SourceDeProductionEnum=SourceDeProductionEnum
  navigateSource=""
  idArticle:any

  constructor(private fb: FormBuilder, private router: Router,
    private hbluxService:HbluxArticleService,
    private eventDriverConnexionService:HbluxEventDriverConnexionService,
    private activatedRoute:ActivatedRoute,private httpClient:HttpClient) {
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
    this.idArticle=this.activatedRoute.snapshot.paramMap.get("idclient")

   this.hbluxService.findArticleAll()
   .subscribe(
     data=> {
      data.forEach( articl=>{
        if(articl.id== this.idArticle){ this.article=articl
        console.log("article",this.article)}
      })
     }
   )

    this.initreactiveFormAddPhotoToArticle()
   // console.log(this.reactiveFormAddPhotoToArticle)
  }

  initreactiveFormAddPhotoToArticle() {

    this.reactiveFormAddPhotoToArticle = this.fb.group({
      type: ['photo',[Validators.required]],

    })
  }

  onCreerAddPhotoToArticle() {

        if (this.reactiveFormAddPhotoToArticle?.value.type) {
          this.message=null
          if (this.article) this.hbluxService.newHBMediaArticle(
          {typeMedia:this.reactiveFormAddPhotoToArticle.value.type,  article:this.article}
        )
        .subscribe(
          hbmedia=>{
            this.uploadPhoto(this.selectedFile,hbmedia)
            /* console.log("media",hbmedia)
             if(this.selectedFile)this.hbluxService.uploadPhotoProduct(this.selectedFile,hbmedia.id)

              .subscribe(
                photo=>{
                  this.message="Poto ajouté avec succès !"
                }
              )*/
          }
        )
      } else {
      this.message = "Veiller remplir le formulaire"
      setTimeout(() => {
        this.message = null
      }, (3000));
      }

   /*

     */
  }
  uploadPhoto(file:any, hbmedia:Hbmedia) {


      return new Promise((resolve,reject)=>{
      this.hbluxService.uploadPhotoProduct(file, hbmedia.id)
      .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
             this.progress = Math.round(100 * event.loaded);
            } else if (event instanceof HttpResponse) {
              //console.log(this.router.url);
              resolve("La photo a été rajouté avec succès")
              //this.getProducts(this.currentRequest);
              //this.refreshUpdatedProduct();
              //this.currentTime=Date.now();
            }
          },err=>{
            alert("Problème de chargement de limage " + file);
            reject("Problème de chargement de limage " + file)
          })
     } );






  }
  onSeConnecter() {
    this.router.navigateByUrl("connexion")
  }
  messageImage:string|null=null
  selectedFile:File|null=null
  onSelectectedFile(event:any){
    this.selectedFile=event.target.files[0]
    console.log(this.selectedFile)

  }
  upload(){
    console.log(this.selectedFile)

    const uploadImageData=new FormData()
   if(this.selectedFile) uploadImageData.append("file",this.selectedFile,this.selectedFile.name)
   this.httpClient.post<any>("http://localhost:8080/image/upload",uploadImageData, {  observe:"response" } )
    .subscribe(
      data=>{
      if( data.status==200)  {this.messageImage="succeess "}
      else this.messageImage="not succes"
      }
    )
  }
}
