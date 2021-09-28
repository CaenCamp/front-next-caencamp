import Head from 'next/head';

import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';

export default function Contact() {
    return (
        <div className="container">
            <Head>
                <title>Les CaenCamp - contacts</title>
                <Favicon />
            </Head>
            <Menu />
            <main className="main">
                <h1 className="title">Restons en contact</h1>
                <p className="description">Liste des canaux</p>
                <div className="grid">
                    <p>Newsletter</p>
                    <p> / </p>
                    <p>Meetup</p>
                    <p> / </p>
                    <p>...</p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
