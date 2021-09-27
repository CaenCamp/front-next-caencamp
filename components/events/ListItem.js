import { format } from 'date-fns';
import Link from 'next/link';

import styles from '../../styles/Event.module.css';

const SpeakerList = ({ speakers }) => (
    <>
        {speakers.map(speaker => (
            <Link key={speaker.identifier} href={`/speakers/${speaker.identifier}`}>
                {speaker.name}
            </Link>
        ))}
    </>
);

export const EventListItem = ({ event }) => (
    <div className={styles.itemContainer}>
        <div className={styles.talks}>
            {event.workPerformed.map(talk => (
                <div className={styles.talk} key={talk.identifier}>
                    <h3 className={styles.title}>
                        <Link href={`/evenements/${event.identifier}`}>{talk.name}</Link>
                    </h3>
                    <p className={styles.description}>{talk.abstract}</p>
                    <div className={styles.details}>
                        <span>
                            Speaker.s: <SpeakerList speakers={talk.maintainers} />
                        </span>
                        <span>Durée: {talk.format.durationInMinutes} min</span>
                    </div>
                </div>
            ))}
        </div>
        <div className={styles.agenda}>
            <span>#{event.number}</span>
            <span>{format(new Date(event.startDate), 'dd/MM/yyyy')}</span>
            <span>{event.location.name}</span>
        </div>
    </div>
);
