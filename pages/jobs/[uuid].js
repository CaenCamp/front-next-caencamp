import Head from 'next/head';

import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { JobPage } from '@/components/jobs/Page';
import { Menu } from '@/components/Menu';
import styles from '@/styles/Home.module.css';

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
        <div className={styles.container}>
            <Head>
                <title>{job.title} - CaenCamp</title>
                <Favicon />
            </Head>
            <Menu styles={styles} />
            <JobPage styles={styles} job={job} />

            <Footer styles={styles} />
        </div>
    );
};

export default Event;
