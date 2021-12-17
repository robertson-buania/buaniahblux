import {Hbmedia} from "./hbmedia.modele";

export interface Article {

  id?: number;
  nom: string;
  prix: number;
  quantite: number;
  type: string;
  couleur: string;
  taille: string;
  disponible: boolean;
  promotion: boolean;
  description: string;
  hbmediaSet: Hbmedia [];
}
