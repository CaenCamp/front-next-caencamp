import { isPast } from 'date-fns';
import Head from 'next/head';
import Image from 'next/image';

import CaenCampResume from '@/components/CaenCampResume';
import { EventListItem2 } from '@/components/events/ListItem';
import { Favicon } from '@/components/Favicon';

import illustration from '../../public/illustrations/undraw_open_source_1qxw.svg';

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
                <title>Le CaenCamp</title>
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

            <figure className="component component--fifty-fifty">
                <div className="illustration">
                    <div className="l-frame">
                        <img
                            src="/illustrations/undraw_candidate_ubwv.svg"
                            alt="Prochain événement"
                            role="presentation"
                        />
                    </div>
                </div>
                {events && events.upcomming.length > 0 && (
                    <figcaption>
                        {events.upcomming.length <= 1 && <h2>Le prochain événement</h2>}
                        {events.upcomming.length > 1 && <h2>Les prochains événements</h2>}
                        <div className="event-list">
                            {events.upcomming.map(event => (
                                <EventListItem2 key={event.identifier} event={event} />
                            ))}
                        </div>
                    </figcaption>
                )}
                {events && !events.upcomming.length && events.past.length > 0 && (
                    <figcaption>
                        <h2>Le derniers événements</h2>
                        <div className="event-list">
                            {events.past.slice(0, 2).map(event => (
                                <EventListItem2 key={event.identifier} event={event} />
                            ))}
                        </div>
                    </figcaption>
                )}
            </figure>
        </>
    );
}
