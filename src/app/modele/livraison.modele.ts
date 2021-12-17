import {Commande} from './commande.modele';

export interface Livraison {


  id: number
  rue: string
  numero: string
  Pays: string
  ville: string;

  reference: string;
  commande: Commande

}
