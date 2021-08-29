import Link from 'next/link';

export const SpeakerListItem = ({ speaker }) => (
    <li>
        <Link href={`/speakers/${speaker.identifier}`}>{speaker.name}</Link>
    </li>
);
