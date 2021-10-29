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
                <title>Les speakers du CaenCamp</title>
                <meta name="description" content="Ils ont animé les rencontres du CaenCamp." />
            </Head>
            <div className="l-center">
                <div className="component component--columns component--columns--images">
                    <div className="component--columns__intro">
                        <h1 className="title">Les speakers</h1>
                    </div>
                    <ul className="clean-list" role="presentation">
                        {speakers.map(speaker => (
                            <SpeakerListItem key={speaker.identifier} speaker={speaker} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
