import {Article} from "./article.modele";
import {Hbevent} from "./hbevent.modele";
import {Commentaire} from "./commentaire.modele";

export interface Hbmedia {

  id?: number
  typeMedia: String

  mediaUrl?: String

  taille?: String

  favoris?: boolean

  likes?: number

  article: Article
  hbevent?: Hbevent

  commentaires?: Commentaire[]

}
