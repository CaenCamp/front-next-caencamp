import Head from 'next/head';

import { JobListItem } from '@/components/jobs/ListItem';

const API_URL = process.env.API_URL;

export async function getServerSideProps() {
    const jobs = await fetch(`${API_URL}/job-postings?perPage=100`).then(apiResponse => apiResponse.json());

    return {
        props: { jobs },
    };
}

export default function Jobs({ jobs }) {
    return (
        <>
            <Head>
                <title>Les offres d'emploi dans le Calvados</title>
            </Head>
            <h1 className="title">Les offres d'emploi dans le Calvados</h1>
            <p className="description">Liste avec filtres</p>
            <ul>
                {jobs.map(job => (
                    <JobListItem key={job.identifier} job={job} />
                ))}
            </ul>
        </>
    );
}
