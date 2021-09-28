import Link from 'next/link';

export const OrganizationListItem = ({ organization }) => (
    <li>
        <Link href={`/annuaire/${organization.identifier}`}>{organization.name}</Link>
    </li>
);
