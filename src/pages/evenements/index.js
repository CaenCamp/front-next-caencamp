import Head from 'next/head';

import { EventListItem } from '@/components/events/ListItem';
import { TagList } from '@/components/tags/List';

const API_URL = process.env.API_URL;

export async function getStaticProps() {
    const [events, tags] = await Promise.all([
        fetch(`${API_URL}/events?category=CaenCamp&perPage=100`).then(apiResponse => apiResponse.json()),
        fetch(`${API_URL}/tags?perPage=100`).then(apiResponse => apiResponse.json()),
    ]);

    return {
        props: { events, tags },
        revalidate: 3600, // In seconds
    };
}

export default function EventList({ events, tags }) {
    return (
        <>
            <Head>
                <title>Les événements CaenCamp</title>
            </Head>
            <div className="u-full-width hero hero--listing">
                <div className="l-center">
                    <h1>Les événements</h1>
                    <p className="lead">Toutes les rencontres depuis 2012.</p>
                    <div className="l-cluster">
                        <TagList tags={tags} />
                    </div>
                </div>
            </div>
            <div className="event-list">
                {events.map(event => (
                    <EventListItem key={event.identifier} event={event} />
                ))}
            </div>
        </>
    );
}
