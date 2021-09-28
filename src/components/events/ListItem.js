import { format } from 'date-fns';
import Link from 'next/link';

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
    <div className="itemContainer">
        <div className="talks">
            {event.workPerformed.map(talk => (
                <div className="talk" key={talk.identifier}>
                    <h3 className="title">
                        <Link href={`/evenements/${event.identifier}`}>{talk.name}</Link>
                    </h3>
                    <p className="description">{talk.abstract}</p>
                    <div className="details">
                        <span>
                            Speaker.s: <SpeakerList speakers={talk.maintainers} />
                        </span>
                        <span>Durée: {talk.format.durationInMinutes} min</span>
                    </div>
                </div>
            ))}
        </div>
        <div className="agenda">
            <span>#{event.number}</span>
            <span>{format(new Date(event.startDate), 'dd/MM/yyyy')}</span>
            <span>{event.location.name}</span>
        </div>
    </div>
);
