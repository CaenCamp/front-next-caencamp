# 1. Utilisation des ADR.s pour documenter le projet

Date: 2020-11-15

-   Décideurs: [Alexis Janvier](https://github.com/orgs/CaenCamp/people/alexisjanvier)
-   Ticket.s concerné.s: -
-   Pull.s Request.s: -

## Statut

2020-11-15 accepted

## Contexte et énoncé du problème

Ce n'est jamais facile de maintenir la documentation d'un projet. Dans le cas des projets des Coding Caen.Camp, une documentation semble pourtant particulièrement importante, puisque les participants au projet ne se retrouvent qu'une fois par mois _IRL_ et viennent d'horizons techniques très différents.

Il y a beaucoup de décisions qui sont difficilement "documentables" : ce sont celles qui concernent les décisions d'architecture (une API Rest ou graphQL, utilisation d'une base de données relationnelle ou de type noSQL, ...).

Et pourtant, la prise de décision sur ces sujets représente l'un des grands intérêts des Coding CaenCamp.s !

## Options envisagées

-   Utilisation du wiki de Github.
-   Mettre en place un outil de documentation complet, comme [docusaurus](https://docusaurus.io/).
-   Utiliser des [ADRs](https://adr.github.io/).

## Résultat de la décision

Option choisie : "Utiliser des ADR", parce que la solution est simple et rapide, et permet de maintenir une documentation au plus proche du code. Un ADR peut être poussé dans le code du projet en même temps qu'une Pull Request.

### Conséquences positives

-   Un suivi des décisions architecturales prises sur le projet
-   Le format ADR est léger (fichier markdown) et correspond à nos méthodes de développement.
-   La structure des ADR est compréhensible et facilite l'utilisation et la maintenance.
-   Le projet ADR est bien entretenu.

### Conséquences négatives

-   Un peu de travail supplémentaire pour les développeurs qui devront prendre un certain temps pour rédiger les ADR.

## Liens

-   [Architecture et documentation : les ADRs](https://blog.xebia.fr/2019/03/05/architecture-et-documentation-les-adrs/)
-   [Architectural Decision Records](https://adr.github.io/)
-   [Markdown Architectural Decision Records](https://adr.github.io/madr/)
