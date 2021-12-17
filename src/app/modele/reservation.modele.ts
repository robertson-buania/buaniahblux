import {ArticleCommandee} from './articlecommande.modele';
import {Clienthblux} from './clienthblux.modele';

export interface Reservation {


  id: number
  dateReservation: Date
  dateFacturation: Date

  cote: string,

  articleCommandees: ArticleCommandee[]
  clienthblux: Clienthblux

}
