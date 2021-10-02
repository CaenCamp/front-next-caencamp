# Site web du CaenCamp - version 2

![Next JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Langages](https://img.shields.io/github/languages/top/CaenCamp/front-next-caencamp.svg) ![Licence](https://img.shields.io/github/license/CaenCamp/front-next-caencamp.svg) 

[![Tests unitaires](https://github.com/CaenCamp/front-next-caencamp/actions/workflows/unit-tests.yml/badge.svg?branch=main)](https://github.com/CaenCamp/front-next-caencamp/actions/workflows/unit-tests.yml) [![Tests d'intégration sous Firefox](https://github.com/CaenCamp/front-next-caencamp/actions/workflows/e2e-firefox.yml/badge.svg?branch=main)](https://github.com/CaenCamp/front-next-caencamp/actions/workflows/e2e-firefox.yml) [![Audit de performance](https://github.com/CaenCamp/front-next-caencamp/actions/workflows/audit.yml/badge.svg?branch=main)](https://github.com/CaenCamp/front-next-caencamp/actions/workflows/audit.yml) 

![Contributeurs](https://img.shields.io/github/contributors/CaenCamp/front-next-caencamp.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) 


Nous avons longtemps utilisé [Gatsby](https://www.gatsbyjs.com/) pour gérer [le site du CaenCamp](https://github.com/CaenCamp/new-website). Mais force est de constater que l'utilisation de Gatsby était une porte d'entrée complexe pour des personnes novices et que maintenir les versions du système et des plug-ins une sinécure.

De plus, nous souhaitions ouvrir plus largement les contenus du CaenCamp et l'utilisation du markdown était pour cela limitant.

Nous avons donc basculé les contenus dans une base de données postgreSQL et les avons exposés publiquement via une [API Rest](https://api.caen.camp/documentation).

Ce projet a donc pour objectif d'exposer les contenus disponibles depuis l'API du CaenCamp sur le web :) Et pour cette nouvelle version du site, nous avons choisi d'utiliser [Next.js](https://nextjs.org/).

## Démarrage rapide

### Pré-requis

Vous devez avoir [Node.js](https://nodejs.org/en/) en version 14 ([LTS](https://nodejs.org/en/about/releases/)) au minimum.

### Installation

```bash
make init
```

### Lancer le projet

```bash
make start
```

Le projet est alors disponible sur <http://localhost:3000>

## Participer au projet

Vous souhaitez participer ? Merci à vous :+1:

Et c’est très simple :

-   Si vous ne savez pas par où commencer, vous pouvez jeter un coup d’œil aux [**issues**](https://github.com/CaenCamp/front-next-caencamp/issues).
-   Voir les cartes des fonctionnalités à développer sur [**tableau Kanban**](https://github.com/CaenCamp/front-next-caencamp/projects/1) du projet.
-   Une fois que vous savez quoi faire, vous pouvez consulter le [**guide du contributeur**](./docs/CONTRIBUTING.md) pour vous lancer.

Et si vous ne trouvez toujours pas quoi faire dans les issues existantes et/ou que vous avez d’autres idées, n’hésitez pas à créer une nouvelle issue.

## Trouver de la documentation

Certes, le [code et ses tests sont la meilleur documentation](https://martinfowler.com/bliki/CodeAsDocumentation.html).

Pour autant, le code ne fait pas tous le projet. Vous trouverez donc, en plus de code, des informations sur le projet dans :

- [le guide du contributeur](./docs/CONTRIBUTING.md)
- [le wiki du projet](https://github.com/CaenCamp/front-next-caencamp/wiki)
- [les ADR.s (notes sur les décisions d'architecture)](./docs/adr/README.md)

Si vous ne savez pas trop comment participer à un projet open-source, vous pouvez aussi jeter un oeil sur notre ["Petit guide de participation aux projets des CaenCamp.s pour ceux qui ne saurait pas trop par où commencer."](https://github.com/CaenCamp/coding-caen-camp)

## License

Les projets du Coding CaenCamp sont sous license [GNU GPLv3](LICENSE)
