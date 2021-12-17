export enum ArticleActionEventTypesEnum {

  PANIER = "[ArticleCommandee] Passer à la caisse ",
  PAIEMENT = "[ArticleCommandee] paiement des articles commendées ",
  ACHETERUNARTICLE = "[ArticleCommandee] ACHETERUNARTICLE des articles commendées ",
  GETALLARTICLES = "[Article]  ",
  DECONNEXION="[COMPTE ] Déconnexion ",
  CONNEXION="[COMPTE ] Se connecter ",
  CREATIONCOMPTECLIIENT="[COMPTE CLIENT] "
}

export interface HbLuxActionEvent {
  type: ArticleActionEventTypesEnum,
  source: SourceDeProductionEnum,
  payload?: any
}

export enum SourceDeProductionEnum {
  PAIEMENTCOMPONENT = "[Article commandé] composant de paiement",
  PANIERCOMPONENT = "[Panier ] composant du panier",
  MAGASINCOMPONENT = "[ArticleCommandee ] Ajouter un article au panier",
  HeaderNavbarComponent="[HEADERNAVBARCOMPONENT] ",
  ConnexionComponent="[ConnexionComponent compteClient] ",
  NewCompteClientComponent="[NEWCOMPTECLIENTCOMPONENT] "

}

export interface ConnexionActions{
  type: ArticleActionEventTypesEnum,
  source: SourceDeProductionEnum,
  payload?: any
}
