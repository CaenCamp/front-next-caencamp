import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as React from 'react';

import { SpeakerListItem } from './ListItem';

expect.extend(toHaveNoViolations);

const speaker = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'gael-reyrol',
    identifier: 'gael-reyrol',
    url: 'http://localhost:3001/api/speakers/gael-reyrol',
    name: 'Gaël Reyrol',
    disambiguatingDescription:
        'lead dev @dansmaculottefr | former devops @SoyHuCe, #RollerDerby player & @42born2code alumni',
    description:
        'Je m’appelle Gaël Reyrol, j’ai 24 ans, je niaise à Caen et je\nsuis développeur fullstack ainsi que devops, chez dans ma culotte\n[https://dansmaculotte.com/fr].\n\nLa programmation ainsi que l’informatique en général me passionne\ndepuis mes 12, 13 ans en commençant par des serveurs privés World of\nWarcraft. J’ai intégré l’École 42 à son lancement en 2013.\n\nPendant ma scolarité à l’école 42 j’y ai découvert\nl’impression 3D dans les différents fablabs et hackerspaces de la\ncapitale, ce qui m’a conduit à la création de ma propre startup\nMakeidea une plateforme de partage de modèles 3D à imprimer.\n',
    descriptionHtml:
        '<p>Je m’appelle Gaël Reyrol, j’ai 24 ans, je niaise à Caen et je suis développeur fullstack ainsi que devops, chez <a href="https://dansmaculotte.com/fr">dans ma culotte</a>.</p>\n<p>La programmation ainsi que l’informatique en général me passionne depuis mes 12, 13 ans en commençant par des serveurs privés World of Warcraft. J’ai intégré l’École 42 à son lancement en 2013.</p>\n<p>Pendant ma scolarité à l’école 42 j’y ai découvert l’impression 3D dans les différents fablabs et hackerspaces de la capitale, ce qui m’a conduit à la création de ma propre startup Makeidea une plateforme de partage de modèles 3D à imprimer.</p>',
    image: 'https://caen.camp/static/logoFondBlanc-278da657a83902f7d21083ade8e9ce7a.png',
    websites: [
        {
            url: 'https://github.com/Zevran',
            type: 'github',
        },
        {
            url: 'https://www.linkedin.com/in/gaelreyrol/',
            type: 'linkedin',
        },
        {
            url: 'https://gaelreyrol.dev/',
            type: 'perso',
        },
        {
            url: 'https://twitter.com/GaelReyrol',
            type: 'twitter',
        },
    ],
    talks: [
        {
            '@type': 'CreativeWork',
            '@id': 'retour-de-xp-sur-lhebergement-des-db-et-applications-sur-le-paas-de-clever-cloud',
            identifier: 'retour-de-xp-sur-lhebergement-des-db-et-applications-sur-le-paas-de-clever-cloud',
            url: 'http://localhost:3001/api/events/edition-1',
            name: "Retour de XP sur l'hébergement des DB et applications sur le PaaS de Clever Cloud",
            format: {
                label: 'Regular',
                durationInMinutes: 45,
            },
            abstract: "Présentation de HashiCorp Consul et retour d'expériences sur Clever Cloud",
            video: null,
            image: 'https://caen.camp/static/logoFondBlanc-278da657a83902f7d21083ade8e9ce7a.png',
        },
        {
            '@type': 'CreativeWork',
            '@id': 'introduction-au-devops',
            identifier: 'introduction-au-devops',
            url: 'http://localhost:3001/api/events/introduction-au-devops',
            name: 'Introduction au DevOps',
            format: {
                label: 'Regular',
                durationInMinutes: 45,
            },
            abstract:
                "Ce meetup aura pour but de démystifier ce terme aujourd'hui devenu incontournable, comprendre la place qu'il occupe au sein d'une entreprise et ainsi que les problèmes qu'il adresse.",
            video: 'https://www.youtube.com/watch?v=gYffPoFsp4w',
            image: 'https://caen.camp/static/logoFondBlanc-278da657a83902f7d21083ade8e9ce7a.png',
        },
    ],
};

describe('Speaker List Item', () => {
    it('should display the speaker name', () => {
        render(<SpeakerListItem speaker={speaker} />);

        const name = screen.getByText('Gaël Reyrol');

        expect(name).toBeInTheDocument();
    });

    it('should have a valide accessibility', async () => {
        const { container } = render(
            <ul>
                <SpeakerListItem speaker={speaker} />
            </ul>,
        );

        const results = await axe(container, {
            rules: {
                // for demonstration only, don't disable rules that need fixing.
                'svg-img-alt': { enabled: false },
            },
        });
        expect(results).toHaveNoViolations();
    });
});
