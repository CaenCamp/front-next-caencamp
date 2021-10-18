import { isPast } from 'date-fns';
import Head from 'next/head';
import Image from 'next/image';

import CaenCampResume from '@/components/CaenCampResume';
import { EventListItem } from '@/components/events/ListItem';
import { Favicon } from '@/components/Favicon';

import illustration from '../../public/undraw_Team_spirit_re_yl1v.svg';

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

            {events && events.upcomming.length > 0 && (
                <>
                    <h2 className="subtitle">Les prochains événements</h2>
                    {events.upcomming.map(event => (
                        <EventListItem key={event.identifier} event={event} />
                    ))}
                </>
            )}
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
