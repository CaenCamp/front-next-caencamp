import Head from 'next/head';

import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';

export default function CallForSpeaker() {
    return (
        <div className="container">
            <Head>
                <title>Les CaenCamp - Proposer un talk</title>
                <Favicon />
            </Head>
            <Menu />
            <main className="main">
                <h1 className="title">Proposer un talk</h1>
                <p className="description">Formulaire</p>
            </main>
            <Footer />
        </div>
    );
}
