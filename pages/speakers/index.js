import Head from 'next/head';

import { Favicon } from '../../components/Favicon';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { SpeakerListItem } from '../../components/speakers/ListItem';
import styles from '../../styles/Home.module.css';

const API_URL = process.env.API_URL;

export async function getStaticProps() {
    const speakers = await fetch(`${API_URL}/speakers?perPage=100`).then(apiResponse => apiResponse.json());

    return {
        props: { speakers },
    };
}

export default function Speakers({ speakers }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Les speakers des CaenCamp</title>
                <Favicon />
            </Head>

            <main className={styles.main}>
                <Menu styles={styles} />
                <h1 className={styles.title}>Les speakers</h1>

                <div className={styles.grid}>
                    <ul>
                        {speakers.map(speaker => (
                            <SpeakerListItem key={speaker.identifier} speaker={speaker} />
                        ))}
                    </ul>
                </div>
            </main>

            <Footer styles={styles} />
        </div>
    );
}
