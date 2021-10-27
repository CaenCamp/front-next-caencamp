import Avatar from 'boring-avatars';

import { TalkListItem } from '@/components/events/ListItem';

const getSiteIcon = type => {
    switch (type) {
        case 'github':
            return '/social/github_b.svg';
        case 'twitter':
            return '/social/twitter_b.svg';
        case 'linkedin':
            return '/social/linked_b.svg';
        default:
            return '/social/perso_b.svg';
    }
};

const SpeakerWebSite = ({ websites }) => {
    return (
        <div className="l-cluster">
            <div>
                {websites.map(site => (
                    <div key={site.url}>
                        <a href={site.url} className="with-icon--before">
                            <img
                                className="icon"
                                src={getSiteIcon(site.type)}
                                width="20"
                                height="20"
                                alt={site.type}
                                aria-hidden="true"
                            />{' '}
                            {site.type}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const SpeakerPage = ({ speaker }) => (
    <article>
        <div className="people-list">
            <div className="l-sidebar">
                <div>
                    <div className="not-sidebar">
                        <div>
                            <h1 className="txt-mars">{speaker.name}</h1>
                            <p className="txt-eris">{speaker.disambiguatingDescription}</p>
                            <div
                                className="component"
                                dangerouslySetInnerHTML={{
                                    __html: speaker.descriptionHtml,
                                }}
                            ></div>
                        </div>
                    </div>
                    <SpeakerWebSite websites={speaker.websites} />
                    <div className="sidebar">
                        <div className="avatar">
                            <Avatar
                                size={40}
                                name={speaker.name}
                                variant="bauhaus"
                                colors={['#A3C68C', '#879676', '#6E6662', '#4F364A', '#340735']}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="u-full-width">
            <div className="l-center">
                {speaker.talks.length > 1 ? (
                    <h2 className="txt-mars">Ses {speaker.talks.length} talks</h2>
                ) : (
                    <h2 className="txt-mars">Son talk</h2>
                )}
            </div>
        </div>
        <div className="event-list">
            {speaker.talks.map(talk => (
                <TalkListItem talk={talk} key={talk.identifier} />
            ))}
        </div>
    </article>
);
