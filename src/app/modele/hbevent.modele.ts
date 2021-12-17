import {Hbmedia} from "./hbmedia.modele";

export interface Hbevent {

  id?: number
  titre: string

  description: string
  hbmedia?: Hbmedia
}
