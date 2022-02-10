# 2. Page sponsor, quelle

Date: 2022-02-10

-   Décideurs:
    -   [Cédric Blanchard](https://github.com/Atthis)
    -   [Alexandre Géraut](https://github.com/AlexandreGerault)
    -   [Emmanuel Bosquet](https://github.com/Keksoj)
-   Ticket.s concerné.s: #31
-   Pull.s Request.s: #44

## Statut

Proposé

2022-02-10

## Contexte et énoncé du problème

Nous voulons afficher les sponsors dans une page dédiée : <https://caen.camp/sponsors>.

-   faut-il coder en dur ? (il n'y a pas beaucoup de sponsors)
-   faut-il un nouvel endpoint sur l'API ? (il n'y a pas d'endpoint /api/sponsors)
-   quid des sponsors qui accueillent ?
-   mettre un _call to action_ pour inciter de nouveaux sponsors ?

### Données codées en dur

Nous n'avons que peu de sponsors, il peut être simple d'hardcoder les images et les noms des sponsors.

Inconvénient : ajouter de nouveaux sponsors devra être fait à la mano.

### Nouvel endpoint sur l'API

Un endpoint `/api/sponsors` n'existe pas. Pour créer l'endpoint, il faudrait créer un nouveau contrôleur dans l'API.

Inconvénient : il faut toucher à l'API
Avantage : c'est plus élégant et pérenne, intégrable à d'autres systèmes.

### Ceux qui accueillent

Le dôme, HeyCoworking… nous accueillent, mais ne sont pas des sponsors d'event en particulier. 
Les coder en dur semble raisonnable.

### _Call to action_ pour les sponsors potentiels

Pour les sponsors qui passeraient sur le site, un bouton « je veux sponsoriser » serait intéressant. Oui ? Non ?
Le bouton pourrait lier vers un formulaire de mail, un téléphone…

## Résultat de la décision

(vide)

### Conséquences positives

(vide)

### Conséquences négatives

(vide)

## Liens

[le swagger de l'API](https://api.caen.camp/documentation)
