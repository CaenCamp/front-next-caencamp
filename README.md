# Template pour les projets des Caen.Camp.s

<!-- LES BADGES
![Tests](https://github.com/CaenCamp/api-caencamp/workflows/phpunit/badge.svg?branch=main) ![Top language](https://img.shields.io/github/languages/top/CaenCamp/api-caencamp.svg) ![Contributors](https://img.shields.io/github/contributors/CaenCamp/api-caencamp.svg) ![License](https://img.shields.io/github/license/CaenCamp/api-caencamp.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) -->

<!-- Une description succinct mais motivante du projet. -->

Ce dépôt peut servir de [template](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/) lorsque vous créez un nouveau projet Coding Caen.Camp.

![Utiliser un template de projet](https://github.blog/wp-content/uploads/2019/06/repository-template.gif?w=1024&resize=1024%2C512)

## Démarrage rapide

Une description rapide des [pré-requis](./docs/CONTRIBUTING.md#lenvironnement-de-développement) sur l'environnement local permettant de lancer un `make install`.

Le `Makefile` devra toujours comporter au moins les recettes suivantes :

- help
- install
- start
- test

Vous trouverez plus d'informations sur les `Makefile` sur le [guide des Coding Caen.Camp](https://github.com/CaenCamp/coding-caen-camp/blob/master/formalisme.md#le-makefile).

```bash
make install
```

et lancer le projet avec :

```bash
make start
```

Le projet est alors disponible sur <http://localhost:xxxx>

## Participer au projet

Vous souhaitez participer ? Merci à vous :+1:

Et c’est très simple :

-   Si vous ne savez pas par où commencer, vous pouvez jeter un coup d’œil aux [**issues**](https://github.com/CaenCamp/api-caencamp/issues).
-   Voir les cartes des fonctionnalités à développer sur [**tableau Kanban**](https://github.com/orgs/CaenCamp/projects/2) du projet.
-   Une fois que vous savez quoi faire, vous pouvez consulter le [**guide du contributeur**](./docs/CONTRIBUTING.md) pour vous lancer.

Et si vous ne trouvez toujours pas quoi faire dans les issues existantes et/ou que vous avez d’autres idées, n’hésitez pas à créer une nouvelle issue.

## Trouver de la documentation

Certes, le [code et ses tests sont la meilleur documentation](https://martinfowler.com/bliki/CodeAsDocumentation.html).

Pour autant, le code ne fait pas tous le projet. Vous trouverez donc, en plus de code, des informations sur le projet dans :

- [le guide du contributeur](./docs/CONTRIBUTING.md)
- [le wiki du projet](https://github.com/CaenCamp/api-caencamp/wiki)
- [les ADR.s (notes sur les décisions d'architecture)](./docs/adr/README.md)

Si vous ne savez pas trop comment participer à un projet open-source, vous pouvez aussi jeter un oeil sur notre ["Petit guide de participation aux projets des CaenCamp.s pour ceux qui ne saurait pas trop par où commencer."](https://github.com/CaenCamp/coding-caen-camp)

## License

Les projets des Coding Caen.Camp.s sont sous license [GNU GPLv3](LICENSE)
