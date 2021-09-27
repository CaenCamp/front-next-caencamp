import Head from 'next/head';

import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';

export default function Association() {
    return (
        <div className="container">
            <Head>
                <title>Les CaenCamp - l'association</title>
                <Favicon />
            </Head>
            <Menu />
            <main className="main">
                <h1 className="title">L'association</h1>

                <p className="description">Pourquoi une asso ? Adhésion</p>
            </main>

            <Footer />
        </div>
    );
}
