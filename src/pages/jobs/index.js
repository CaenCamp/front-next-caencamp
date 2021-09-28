import Head from 'next/head';

import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { JobListItem } from '@/components/jobs/ListItem';
import { Menu } from '@/components/Menu';

const API_URL = process.env.API_URL;

export async function getServerSideProps() {
    const jobs = await fetch(`${API_URL}/job-postings?perPage=100`).then(apiResponse => apiResponse.json());

    return {
        props: { jobs },
    };
}

export default function Jobs({ jobs }) {
    return (
        <div className="container">
            <Head>
                <title>Les offres d'emploi dans le Calvados</title>
                <Favicon />
            </Head>
            <Menu />
            <main className="main">
                <h1 className="title">Les offres d'emploi dans le Calvados</h1>

                <p className="description">Liste avec filtres</p>
                <ul>
                    {jobs.map(job => (
                        <JobListItem key={job.identifier} job={job} />
                    ))}
                </ul>
            </main>

            <Footer />
        </div>
    );
}
