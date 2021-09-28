import Head from 'next/head';

import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';
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
        <div className="container">
            <Head>
                <title>Les speakers des CaenCamp</title>
                <Favicon />
            </Head>
            <Menu />
            <main className="main">
                <h1 className="title">Les speakers</h1>

                <div className="grid">
                    <ul>
                        {speakers.map(speaker => (
                            <SpeakerListItem key={speaker.identifier} speaker={speaker} />
                        ))}
                    </ul>
                </div>
            </main>

            <Footer />
        </div>
    );
}
