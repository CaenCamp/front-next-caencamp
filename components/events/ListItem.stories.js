import React from 'react';

import { EventListItem } from './ListItem';

export default {
    title: 'Events/List',
    component: EventListItem,
    parameters: {
        nextRouter: {
            pathname: '/',
        },
    },
};

const event = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': 'a-la-decouverte-des-tests-automatiques',
    identifier: 'a-la-decouverte-des-tests-automatiques',
    url: 'http://localhost:3001/api/events/a-la-decouverte-des-tests-automatiques',
    name: 'A la découverte des tests automatiques',
    category: 'CaenCamp',
    number: 49,
    startDate: '2020-09-23T16:30:00Z',
    endDate: '1970-01-01T00:00:00Z',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    isAccessibleForFree: true,
    description:
        "Les tests (automatiques, de non régression, unitaires) sont de plus\nen plus répandus comme bonne pratique de programmation. Pour autant\nlorsque nous sommes éloignés du sujet, il peut sembler abstrait. A\nquoi cela peut-il bien servir ? Est-ce vraiment utile dans mon\ncontexte ? Comment les mettre en place ?\n\nAprès un rappel des enjeux liés aux tests automatiques, nous vous\nproposons d'illustrer avec pragmatisme la mise en place de ces\nderniers, dans du code source, sans aucun outil spécifique autre que\nvotre langage de programmation, et à pas à pas, vous donner les\nmoyens de les mettre en œuvre.\n\nACTUALITÉ OBLIGE, NOUS NE POURRONS ACCUEILLIR QUE 20 PARTICIPANTS\nMAXIMUM POUR CETTE ÉDITION #49 DE REPRISE DES CAENCAMP.\n",
    descriptionHtml:
        "<p>Les tests (automatiques, de non régression, unitaires) sont de plus en plus répandus comme bonne pratique de programmation. Pour autant lorsque nous sommes éloignés du sujet, il peut sembler abstrait. A quoi cela peut-il bien servir ? Est-ce vraiment utile dans mon contexte ? Comment les mettre en place ?</p>\n<p>Après un rappel des enjeux liés aux tests automatiques, nous vous proposons d'illustrer avec pragmatisme la mise en place de ces derniers, dans du code source, sans aucun outil spécifique autre que votre langage de programmation, et à pas à pas, vous donner les moyens de les mettre en œuvre.</p>\n<p><strong>Actualité oblige, nous ne pourrons accueillir que 20 participants maximum pour cette édition #49 de reprise des CaenCamp.</strong></p>",
    disambiguatingDescription:
        'Les tests sont de plus en plus répandus comme bonne pratique de programmation. A quoi cela peut-il bien servir ? Est-ce vraiment utile dans mon contexte ? Comment les mettre en place ?',
    inLanguage: {
        '@type': 'Language',
        name: 'French',
    },
    image: 'https://caen.camp/static/logoFondBlanc-278da657a83902f7d21083ade8e9ce7a.png',
    tags: ['devops', 'tests'],
    hasVideo: true,
    meetupId: '273100242',
    location: {
        '@type': 'Place',
        '@id': 'le-dome',
        identifier: 'le-dome',
        url: 'http://localhost:3001/api/places/le-dome',
        name: 'Le Dôme',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '3 Esplanade Stéphane Hessel, ',
            addressLocality: 'Caen',
            postalCode: '14000',
            addressCountry: 'FR',
        },
    },
    organizer: {
        '@type': 'Organization',
        '@id': 'caencamp',
        identifier: 'caencamp',
        url: 'http://localhost:3001/api/organizations/caencamp',
        name: 'CaenCamp',
    },
    sponsor: undefined,
    workPerformed: [
        {
            '@type': 'CreativeWork',
            '@id': 'a-la-decouverte-des-tests-automatiques',
            identifier: 'a-la-decouverte-des-tests-automatiques',
            url: 'http://localhost:3001/api/creative-works/a-la-decouverte-des-tests-automatiques',
            name: 'A la découverte des tests automatiques',
            format: {
                label: 'Regular',
                durationInMinutes: 45,
            },
            description:
                'Les tests (automatiques, de non régression, unitaires) sont de plus en plus répandus comme bonne pratique de programmation. Pour autant lorsque nous sommes éloignés du sujet, il peut sembler abstrait. A quoi cela peut-il bien servir ? Est-ce vraiment utile dans mon contexte ? Comment les mettre en place ?\nAprès un rappel des enjeux liés aux tests automatiques, nous vous proposons d&amp#39;illustrer avec pragmatisme la mise en place de ces derniers, dans du code source, sans aucun outil spécifique autre que votre langage de programmation, et à pas à pas, vous donner les moyens de les mettre en œuvre.\nActualité oblige, nous ne pourrons accueillir que 20 participants maximum pour cette édition #49 de reprise des CaenCamp.\n',
            descriptionHtml:
                '<p>Les tests (automatiques, de non régression, unitaires) sont de plus en plus répandus comme bonne pratique de programmation. Pour autant lorsque nous sommes éloignés du sujet, il peut sembler abstrait. A quoi cela peut-il bien servir ? Est-ce vraiment utile dans mon contexte ? Comment les mettre en place ?</p>\n<p>Après un rappel des enjeux liés aux tests automatiques, nous vous proposons d&#39;illustrer avec pragmatisme la mise en place de ces derniers, dans du code source, sans aucun outil spécifique autre que votre langage de programmation, et à pas à pas, vous donner les moyens de les mettre en œuvre.</p>\n<p><strong>Actualité oblige, nous ne pourrons accueillir que 20 participants maximum pour cette édition #49 de reprise des CaenCamp.</strong></p>\n',
            abstract:
                'Les tests sont de plus en plus répandus comme bonne pratique de programmation. A quoi cela peut-il bien servir ? Est-ce vraiment utile dans mon contexte ? Comment les mettre en place ?',
            maintainers: [
                {
                    '@type': 'Person',
                    '@id': 'frederic-leguedois',
                    identifier: 'frederic-leguedois',
                    url: 'http://localhost:3001/api/speakers/frederic-leguedois',
                    name: 'Frédéric Leguedois',
                    disambiguatingDescription:
                        'Evangéliste Agile, libriste, voire polémiste ;-) Conférencier iconoclaste, directeur du pôle Agile chez @CloudTemple.',
                },
                {
                    '@type': 'Person',
                    '@id': 'julien-anne',
                    identifier: 'julien-anne',
                    url: 'http://localhost:3001/api/speakers/julien-anne',
                    name: 'Julien Anne',
                    disambiguatingDescription:
                        'Dév, Agilité, Pair Programming, Ruby On Rails, Debian, Open source, TDD, débutant maker',
                },
            ],
            video: 'https://youtu.be/46AYdmshkKw',
        },
    ],
    performers: [
        {
            '@type': 'Person',
            '@id': 'frederic-leguedois',
            identifier: 'frederic-leguedois',
            url: 'http://localhost:3001/api/speakers/frederic-leguedois',
            name: 'Frédéric Leguedois',
            disambiguatingDescription:
                'Evangéliste Agile, libriste, voire polémiste ;-) Conférencier iconoclaste, directeur du pôle Agile chez @CloudTemple.',
        },
        {
            '@type': 'Person',
            '@id': 'julien-anne',
            identifier: 'julien-anne',
            url: 'http://localhost:3001/api/speakers/julien-anne',
            name: 'Julien Anne',
            disambiguatingDescription:
                'Dév, Agilité, Pair Programming, Ruby On Rails, Debian, Open source, TDD, débutant maker',
        },
    ],
};

const Template = args => <EventListItem {...args} />;

export const ListItem = Template.bind({});
ListItem.storyName = 'List item';
ListItem.args = { event };
