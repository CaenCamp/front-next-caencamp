/* eslint jsx-a11y/anchor-is-valid: 0 */
import { isPast } from 'date-fns';
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
    <div className={`card card--event${isPast(new Date(event.startDate)) ? '' : ' meeting'}`} data-component="card">
        {event.workPerformed.map((talk, index) => (
            <div className="card__text" key={talk.identifier}>
                <div className="l-sidebar">
                    <div>
                        <div className="not-sidebar">
                            {!index && <span className="txt-eris">Édition #{event.number}</span>}
                            <h2 className="card__heading">
                                <Link href={`/evenements/${event.identifier}`}>
                                    <a className="card__link">{talk.name}</a>
                                </Link>
                            </h2>
                            <p>{talk.abstract}</p>
                        </div>

                        <div className="sidebar">
                            {!index && (
                                <div className="date-location">
                                    <div>
                                        <img
                                            src="/calendar.svg"
                                            width="18"
                                            height="20"
                                            alt="calendrier"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div>
                                        <p>
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
                                        </p>
                                        <p>{event.location.name}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="l-cluster">
                    <div>
                        <p>
                            Speaker: <SpeakerList speakers={talk.maintainers} />
                        </p>
                    </div>
                </div>
                <p className="txt-pluto">Durée: {talk.format.durationInMinutes} min</p>
                <div className="l-cluster">
                    <ul className="clean-list">
                        {talk.tags.map(tag => (
                            <li key={tag}>
                                <span className="cc-tag">{tag}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {!index && event.workPerformed.length > 1 && <br />}
            </div>
        ))}
    </div>
);

export const TalkListItem = ({ talk }) => (
    <div
        className={`card card--event${isPast(new Date(talk.recordedAt.startDate)) ? '' : ' meeting'}`}
        data-component="card"
    >
        <div className="card__text" key={talk.identifier}>
            <div className="l-sidebar">
                <div>
                    <div className="not-sidebar">
                        <h2 className="card__heading">
                            <Link href={`/evenements/${talk.recordedAt.identifier}`}>
                                <a className="card__link">{talk.name}</a>
                            </Link>
                        </h2>
                        <p>{talk.abstract}</p>
                    </div>

                    <div className="sidebar">
                        <div className="date-location">
                            <div>
                                <img src="/calendar.svg" width="18" height="20" alt="calendrier" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="txt-eris">Présenté lors de l'édition #{talk.recordedAt.number}</p>
                                <p>
                                    <time dateTime={talk.recordedAt.startDate}>
                                        {new Date(talk.recordedAt.startDate).toLocaleDateString('fr-FR', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </time>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="txt-pluto">
                <strong>Durée</strong>: {talk.format.durationInMinutes} min
            </p>
            <p className="txt-pluto">
                <strong>Filmé</strong>: {talk.video ? 'oui' : 'non'}
            </p>
        </div>
    </div>
);
