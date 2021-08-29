import Head from 'next/head';

import { Favicon } from '../../components/Favicon';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { SpeakerPage } from '../../components/speakers/Page';
import styles from '../../styles/Home.module.css';

const API_URL = process.env.API_URL;

export async function getStaticPaths() {
    const speakers = await fetch(`${API_URL}/speakers?perPage=100`).then(apiResponse => apiResponse.json());

    const paths = speakers.map(speaker => ({
        params: { slug: speaker.identifier },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
    const speaker = await fetch(`${API_URL}/speakers/${slug}`).then(apiResponse => apiResponse.json());

    if (!speaker) {
        return {
            notFound: true,
        };
    }

    return {
        props: { speaker },
    };
}

const Speaker = ({ speaker = {} }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{speaker.name} - CaenCamp</title>
                <Favicon />
            </Head>
            <Menu styles={styles} />
            <SpeakerPage styles={styles} speaker={speaker} />

            <Footer styles={styles} />
        </div>
    );
};

export default Speaker;