import Link from 'next/link';

export const JobListItem = ({ job }) => (
    <li>
        <Link href={`/jobs/${job.identifier}`}>{job.title}</Link>
    </li>
);
