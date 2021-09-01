import Head from 'next/head';

import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { JobListItem } from '@/components/jobs/ListItem';
import { Menu } from '@/components/Menu';
import styles from '@/styles/Home.module.css';

const API_URL = process.env.API_URL;

export async function getStaticProps() {
    const jobs = await fetch(`${API_URL}/job-postings?perPage=100`).then(apiResponse => apiResponse.json());

    return {
        props: { jobs },
    };
}

export default function Jobs({ jobs }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Les offres d'emploi dans le Calvados</title>
                <Favicon />
            </Head>
            <Menu styles={styles} />
            <main className={styles.main}>
                <h1 className={styles.title}>Les offres d'emploi dans le Calvados</h1>

                <p className={styles.description}>Liste avec filtres</p>
                <ul>
                    {jobs.map(job => (
                        <JobListItem key={job.identifier} job={job} />
                    ))}
                </ul>
            </main>

            <Footer styles={styles} />
        </div>
    );
}
