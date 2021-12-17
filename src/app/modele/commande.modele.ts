import {ArticleCommandee} from './articlecommande.modele';
import {Clienthblux} from './clienthblux.modele';
import {Livraison} from './livraison.modele';

export interface Commande {
  id: number;
  dateCommande: Date
  dateLivraison: Date
  cote: string,
  articleCommandees: ArticleCommandee[]

  clienthblux: Clienthblux


  livraison: Livraison

}
