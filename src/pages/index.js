import { isPast } from 'date-fns';
import Head from 'next/head';
import Image from 'next/image';

import CaenCampResume from '@/components/CaenCampResume';
import { EventListItem } from '@/components/events/ListItem';

import illustration from '../../public/illustrations/undraw_open_source_1qxw.svg';

const API_URL = process.env.API_URL;

const caenCampJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Caen, France',
        addressCountry: 'FR',
        postalCode: '14000',
    },
    email: 'contact(at)caen.camp',
    name: 'CaenCamp',
    disambiguatingDescription:
        'Le CaenCamp est un collectif ouvert à tous.tes les développeur.euses de Caen et du Calvados, que ces personnes soient juniors, séniores, professionnelles, étudiantes ou juste curieuses.',
    logo: {
        '@type': 'ImageObject',
        author: 'CaenCamp',
        contentLocation: 'Caen, Calvados, France',
        contentUrl: 'https://caen.camp/static/logoFondBlanc-278da657a83902f7d21083ade8e9ce7a.png',
        datePublished: '2012-09-09',
        description: 'Le logo du CaenCamp.',
        name: 'Le logo du CaenCamp',
    },
};

export async function getStaticProps() {
    const events = await fetch(`${API_URL}/events?category=CaenCamp&perPage=4`)
        .then(apiResponse => apiResponse.json())
        .then(unClassifiedEvents =>
            unClassifiedEvents.reduce(
                (accumulator, event) => {
                    if (isPast(new Date(event.startDate))) {
                        accumulator.past.push(event);
                    } else {
                        accumulator.upcomming.push(event);
                    }

                    return accumulator;
                },
                { upcomming: [], past: [] },
            ),
        );

    return {
        props: { events },
        revalidate: 3600, // 1 heure en secondes
    };
}

export default function Home({
    events = {
        upcomming: [],
        past: [],
    },
}) {
    return (
        <div className="home">
            <Head>
                <title>Le CaenCamp</title>
                <meta
                    name="description"
                    content="Bienvenue sur le site du CaenCamp, collectif ouvert à tous.tes les développeur.euses du Calvados"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            ...caenCampJsonLd,
                            events: [...events.upcomming, ...events.past.slice(0, 2)],
                        }),
                    }}
                />
            </Head>
            <div className="u-full-width hero">
                <div className="l-center">
                    <div className="l-sidebar">
                        <div>
                            <div className="not-sidebar">
                                <h1>Le CaenCamp</h1>
                                <CaenCampResume />
                            </div>
                            <div className="sidebar">
                                <Image src={illustration} alt="CaenCamp collectif ouvert à tous.tes" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <figure className="component component--fifty-fifty">
                <div className="illustration">
                    <div className="l-frame">
                        <img src="/illustrations/undraw_candidate_ubwv.svg" alt="Prochain événement" />
                    </div>
                </div>
                {events && events.upcomming.length > 0 && (
                    <figcaption>
                        {events.upcomming.length <= 1 && <h2>Le prochain événement</h2>}
                        {events.upcomming.length > 1 && <h2>Les prochains événements</h2>}
                        <div className="event-list">
                            {events.upcomming.map(event => (
                                <EventListItem key={event.identifier} event={event} />
                            ))}
                        </div>
                    </figcaption>
                )}
                {events && !events.upcomming.length && events.past.length > 0 && (
                    <figcaption>
                        <h2>Le derniers événements</h2>
                        <div className="event-list">
                            {events.past.slice(0, 1).map(event => (
                                <EventListItem key={event.identifier} event={event} />
                            ))}
                        </div>
                    </figcaption>
                )}
            </figure>
        </div>
    );
}
