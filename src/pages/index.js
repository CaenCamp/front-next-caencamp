import { isPast } from 'date-fns';
import Head from 'next/head';

import CaenCampResume from '@/components/CaenCampResume';
import { EventListItem } from '@/components/events/ListItem';
import { Favicon } from '@/components/Favicon';

const API_URL = process.env.API_URL;

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
    };
}

export default function Home({ events }) {
    return (
        <>
            <Head>
                <title>Les CaenCamp</title>
                <meta name="description" content="Bienvenue sur le site du CaenCamp" />
                <Favicon />
            </Head>
            <h1 className="title">Bienvenue sur le site du CaenCamp</h1>
            <CaenCampResume className="description" />
            {events && events.upcomming.length > 0 && (
                <>
                    <h2 className="subtitle">Les prochains événements</h2>
                    {events.upcomming.map(event => (
                        <EventListItem key={event.identifier} event={event} />
                    ))}
                </>
            )}
            {events && events.upcomming.length === 0 && <p>Pas d'événement programmé pour le moment</p>}
            {events && events.past.length > 0 && (
                <>
                    <h2 className="subtitle">Les derniers événements</h2>
                    {events.past.slice(0, 2).map(event => (
                        <EventListItem key={event.identifier} event={event} />
                    ))}
                </>
            )}
        </>
    );
}
