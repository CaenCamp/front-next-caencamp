import { isPast } from 'date-fns';
import Link from 'next/link';
import ReactPlayer from 'react-player';

const playerConfig = {
    youtube: {
        playerVars: { showinfo: 1 },
    },
    vimeo: {
        playerOptions: { showinfo: 1 },
    },
};

export const computeTalkDateTime = ({ event, talk }) => {
    const startDate = new Date(event.startDate);
    for (const oneTalk of event.workPerformed) {
        if (talk.identifier === oneTalk.identifier) break;
        startDate.setTime(startDate.getTime() + (parseInt(oneTalk.format.durationInMinutes, 10) + 10) * 60 * 1000);
    }

    return startDate;
};

export const TalkDateTime = ({ event, talk }) => {
    const startDate = computeTalkDateTime({ event, talk });
    return (
        <>
            <dt>Date et heure : </dt>
            <dd>
                <time dateTime={startDate.toISOString()}>
                    {startDate.toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </time>
            </dd>
        </>
    );
};

const TalkDuration = ({ talk }) => (
    <>
        <dt>Durée:</dt>
        <dd>{talk.format.durationInMinutes} min</dd>
    </>
);

const TalkSpeakers = ({ talk }) => (
    <>
        <dt>Speaker:</dt>
        <dd>
            {talk.maintainers.map(speaker => (
                <span key={speaker.identifier}>
                    <Link href={`/speakers/${speaker.identifier}`}>{speaker.name}</Link>{' '}
                </span>
            ))}
        </dd>
    </>
);

const TalkTags = ({ talk }) => (
    <>
        <dt className="with-link">Tags:</dt>
        <dd className="l-cluster with-link">
            <ul className="clean-list">
                {talk.tags.map(tag => (
                    <li key={tag}>
                        <span className="tag">{tag}</span>
                    </li>
                ))}
            </ul>
        </dd>
    </>
);

const EventLocation = ({ event }) => (
    <>
        <dt>Lieu:</dt>
        <dd>{event.location.name}</dd>
    </>
);

const EventRegistration = ({ event }) => (
    <>
        <dt className="with-link">Inscription:</dt>
        <dd className="with-link">
            <a href={`https://www.meetup.com/fr-FR/CaenCamp/events/${event.meetupId}/`}>Meetup</a>
        </dd>
    </>
);

const TalkMeta = ({ event, talk }) => {
    return (
        <section className="meta">
            <h2 className="visuallyhidden">Détails du talk.</h2>
            <dl className="grid">
                <TalkDateTime event={event} talk={talk} />
                <TalkDuration talk={talk} />
                <TalkSpeakers talk={talk} />
                <EventLocation event={event} />
                <TalkTags talk={talk} />
                {event.meetupId && !isPast(new Date(event.startDate)) && <EventRegistration event={event} />}
            </dl>
        </section>
    );
};

export const EventPage = ({ event }) => {
    if (!event || !event.workPerformed) {
        return null;
    }
    return (
        <>
            <div className="content event">
                {event.workPerformed.map((talk, index) => (
                    <article key={talk.identifier}>
                        {index === 0 && (
                            <div className="intro meeting">
                                <h1>{talk.name}</h1>
                            </div>
                        )}
                        {index >= 1 && (
                            <div className="intro meeting" style={{ marginTop: '3rem' }}>
                                <h1>{talk.name}</h1>
                            </div>
                        )}
                        <p className="lead">{talk.abstract}</p>
                        <TalkMeta event={event} talk={talk} />
                        <div
                            className="component"
                            dangerouslySetInnerHTML={{
                                __html: event.descriptionHtml,
                            }}
                        ></div>
                        {!!talk.video && (
                            <div className="player-wrapper">
                                <ReactPlayer
                                    className="cc-player"
                                    url={talk.video}
                                    config={playerConfig}
                                    controls
                                    light
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </>
    );
};
