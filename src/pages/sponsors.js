import Head from 'next/head';

import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';

export default function Sponsor() {
    return (
        <div className="container">
            <Head>
                <title>Les CaenCamp - Les sponsors</title>
                <Favicon />
            </Head>
            <Menu />
            <main className="main">
                <h1 className="title">Les sponsors</h1>

                <p className="description">Liste des sponsors et structures d'acceuil</p>
            </main>

            <Footer />
        </div>
    );
}
