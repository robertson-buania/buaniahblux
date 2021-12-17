import { Hbmedia } from './hbmedia.modele';
import {Reservation} from './reservation.modele';
import {Commande} from './commande.modele';

export interface ArticleCommandee {
  id?: number,
  nomArticle: string
  prix: number;
  quantite: number;
  type?:string
  couleur?: string;
  taille?: string;
  photos?:any
  commande?: Commande

  reservation?: Reservation

}
