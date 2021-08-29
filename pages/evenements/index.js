import Head from 'next/head';

import { EventListItem } from '../../components/events/ListItem';
import { Favicon } from '../../components/Favicon';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { TagList } from '../../components/tags/List';
import styles from '../../styles/Home.module.css';

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
        <div className={styles.container}>
            <Head>
                <title>Les événements CaenCamp</title>
                <Favicon />
            </Head>

            <Menu styles={styles} />
            <main className={styles.main}>
                <h1 className={styles.title}>Les événements</h1>

                <h4>Les tags</h4>
                <TagList tags={tags} />

                <div className={styles.grid}>
                    <ul>
                        {events.map(event => (
                            <EventListItem key={event.identifier} event={event} />
                        ))}
                    </ul>
                </div>
            </main>

            <Footer styles={styles} />
        </div>
    );
}
