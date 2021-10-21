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

const TalkSpeakers = () => (
    <>
        <dt>Speaker:</dt>
        <dd>Deidre De Veloper</dd>
    </>
);

const TalkTags = () => (
    <>
        <dt className="with-link">Tags:</dt>
        <dd className="l-cluster with-link">
            <ul className="clean-list">
                <li>
                    <a href="path/to/page">Tag 1</a>
                </li>
                <li>
                    <a href="path/to/page">Tag 2</a>
                </li>
                <li>
                    <a href="path/to/page">Tag 3</a>
                </li>
                <li>
                    <a href="path/to/page">Tag 4</a>
                </li>
                <li>
                    <a href="path/to/page">Tag 5</a>
                </li>
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

const EventRegistration = () => (
    <>
        <dt className="with-link">Inscription:</dt>
        <dd className="with-link">
            <a href="path/to/site">Name of website</a>
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
                <TalkSpeakers />
                <EventLocation event={event} />
                <TalkTags />
                <EventRegistration />
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
                    </article>
                ))}
            </div>
        </>
    );
};
