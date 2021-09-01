import { isPast } from 'date-fns';
import Head from 'next/head';

import { EventListItem } from '@/components/events/ListItem';
import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';
import styles from '@/styles/Home.module.css';

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
        <div className={styles.container}>
            <Head>
                <title>Les CaenCamp</title>
                <Favicon />
            </Head>

            <Menu styles={styles} />
            <main className={styles.main}>
                <h1 className={styles.title}>Bienvenue sur le site des CaenCamp</h1>

                <p className={styles.description}>Présentation</p>

                {events.upcomming.length > 0 && (
                    <div className={styles.grid}>
                        <p>Les prochains events</p>
                        <ul>
                            {events.upcomming.map(event => (
                                <EventListItem key={event.identifier} event={event} />
                            ))}
                        </ul>
                    </div>
                )}
                {events.upcomming.length === 0 && (
                    <div className={styles.grid}>
                        <p>Pas de prochains events programmé</p>
                    </div>
                )}

                {events.past.length > 0 && (
                    <div className={styles.grid}>
                        <p>Les derniers événements</p>
                        <ul>
                            {events.past.slice(0, 2).map(event => (
                                <EventListItem key={event.identifier} event={event} />
                            ))}
                        </ul>
                    </div>
                )}
            </main>

            <Footer styles={styles} />
        </div>
    );
}
