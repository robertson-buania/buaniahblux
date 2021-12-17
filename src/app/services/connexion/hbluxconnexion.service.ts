
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { Clienthblux } from 'src/app/modele/clienthblux.modele';
import { ConnexionActions } from 'src/app/states/article-state-enum.state';

@Injectable({
  providedIn: 'root'
})
export class HbluxEventDriverConnexionService  {

  sourceArticleSubject: Subject<ConnexionActions> = new Subject<ConnexionActions>()
  sourceArticleSubjectObservable = this.sourceArticleSubject.asObservable()
  compteClient:Clienthblux|null=null

  publishEvent(event: ConnexionActions) {
    this.compteClient=event.payload
    this.sourceArticleSubject.next(event)
  }

  constructor(private http: HttpClient) {
  }


}
