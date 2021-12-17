import {Commande} from './commande.modele';
import {Reservation} from './reservation.modele';

export interface Clienthblux {
  id?: number

  prenom: string

  nom: string

  email: string

  motDePasse?: string

  sexe: string;
  dateNaissance?: Date;
  reservations?: Reservation[]
  commandes?: Commande[]

}
