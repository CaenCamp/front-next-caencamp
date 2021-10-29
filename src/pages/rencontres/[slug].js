import Head from 'next/head';

import { EventPage } from '@/components/events/Page';

const API_URL = process.env.API_URL;

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const apiResponse = await fetch(`${API_URL}/events?category=CaenCamp&perPage=100`);
    const events = await apiResponse.json();

    // Get the paths we want to pre-render based on posts
    const paths = events.map(event => ({
        params: { slug: event.identifier },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
    const event = await fetch(`${API_URL}/events/${slug}`).then(apiResponse => apiResponse.json());

    if (!event) {
        return {
            notFound: true,
        };
    }

    return {
        props: { event },
        revalidate: 86400, // 1 journée en secondes
    };
}

const Event = ({ event = { name: 'CaenCamp', abstract: 'CaenCamp' } }) => {
    return (
        <>
            <Head>
                <title>{event.name} | CaenCamp</title>
                <meta name="description" content={event.abstract} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }} />
            </Head>
            <EventPage event={event} />
        </>
    );
};

export default Event;
