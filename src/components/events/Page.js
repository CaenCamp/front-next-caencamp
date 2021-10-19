export const EventPage = ({ event }) => {
    if (!event || !event.name) {
        return null;
    }
    return (
        <div className="content event">
            <article>
                <div className="intro meeting">
                    <h1>{event.name}</h1>
                    <p>Édition #{event.number}</p>
                </div>
                <p className="lead">{event.disambiguatingDescription}</p>
                <section className="meta">
                    <h2 className="visuallyhidden">Détails de l'événement.</h2>
                    <dl className="grid">
                        <dt>Date:</dt>
                        <dd>
                            <time dateTime={event.startDate}>
                                {new Date(event.startDate).toLocaleDateString('fr-FR', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </time>
                        </dd>
                        <dt>Durée:</dt>
                        {event.workPerformed && event.workPerformed[0] && (
                            <dd>{event.workPerformed[0].format.durationInMinutes} min</dd>
                        )}
                        <dt>Speaker:</dt>
                        <dd>Deidre De Veloper</dd>
                        <dt>Lieu:</dt>
                        <dd>{event.location.name}</dd>
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
                        <dt className="with-link">Inscription:</dt>
                        <dd className="with-link">
                            <a href="path/to/site">Name of website</a>
                        </dd>
                    </dl>
                </section>
                <div
                    className="component component--text"
                    dangerouslySetInnerHTML={{
                        __html: event.descriptionHtml,
                    }}
                ></div>
                <figure className="component component--image">
                    <div className="l-frame l-frame--16-9">
                        <img
                            src="/illustrations/undraw_candidate_ubwv.svg"
                            alt="A Macbook screen with code, as seen from over the developer's shoulder"
                        />
                    </div>
                    <figcaption>
                        <p>
                            The figcaption is not a replacement for the image's <code>alt</code> attribute. It should be
                            used for providing relevant supporting content.
                        </p>
                    </figcaption>
                </figure>
            </article>
        </div>
    );
};
