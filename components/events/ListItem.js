import Link from 'next/link';

export const EventListItem = ({ event }) => (
    <li>
        <Link href={`/evenements/${event.identifier}`}>{event.name}</Link>
    </li>
);
