import Avatar from 'boring-avatars';
import Link from 'next/link';

export const SpeakerListItem = ({ speaker }) => (
    <li>
        <div className="card" data-component="card">
            <div className="card__text">
                <h2 className="card__heading">
                    <Link href={`/speakers/${speaker.identifier}`}>{speaker.name}</Link>
                </h2>
                <p>{speaker.disambiguatingDescription}</p>
            </div>
            <div className="l-frame l-frame--16-9 card__image">
                <Avatar
                    size={40}
                    name={speaker.name}
                    variant="bauhaus"
                    colors={['#A3C68C', '#879676', '#6E6662', '#4F364A', '#340735']}
                />
            </div>
        </div>
    </li>
);
