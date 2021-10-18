import Head from 'next/head';

import { JobPage } from '@/components/jobs/Page';

const API_URL = process.env.API_URL;

export async function getStaticPaths() {
    const jobs = await fetch(`${API_URL}/job-postings?perPage=100`).then(apiResponse => apiResponse.json());

    const paths = jobs.map(job => ({
        params: { uuid: job.identifier },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params: { uuid } }) {
    const job = await fetch(`${API_URL}/job-postings/${uuid}`).then(apiResponse => apiResponse.json());

    if (!job) {
        return {
            notFound: true,
        };
    }

    return {
        props: { job },
        revalidate: 600, // In seconds
    };
}

const Event = ({ job = {} }) => {
    return (
        <>
            <Head>
                <title>{job.title} - CaenCamp</title>
            </Head>
            <JobPage job={job} />
        </>
    );
};

export default Event;
