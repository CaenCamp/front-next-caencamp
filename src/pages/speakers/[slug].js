import Head from 'next/head';

import { SpeakerPage } from '@/components/speakers/Page';

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
        <>
            <Head>
                <title>{speaker.name} - CaenCamp</title>
            </Head>
            <SpeakerPage speaker={speaker} />
        </>
    );
};

export default Speaker;
