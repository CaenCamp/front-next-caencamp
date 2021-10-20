import Head from 'next/head';

import { SpeakerListItem } from '@/components/speakers/ListItem';

const API_URL = process.env.API_URL;

export async function getStaticProps() {
    const speakers = await fetch(`${API_URL}/speakers?perPage=100`).then(apiResponse => apiResponse.json());

    return {
        props: { speakers },
    };
}

export default function Speakers({ speakers }) {
    return (
        <>
            <Head>
                <title>Les speakers des CaenCamp</title>
            </Head>
            <h1 className="title">Les speakers</h1>
            <div className="grid">
                <ul>
                    {speakers.map(speaker => (
                        <SpeakerListItem key={speaker.identifier} speaker={speaker} />
                    ))}
                </ul>
            </div>
        </>
    );
}
