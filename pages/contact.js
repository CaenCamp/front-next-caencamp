import Head from 'next/head';

import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';
import styles from '@/styles/Home.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Les CaenCamp - contacts</title>
                <Favicon />
            </Head>
            <Menu styles={styles} />
            <main className={styles.main}>
                <h1 className={styles.title}>Restons en contact</h1>

                <p className={styles.description}>Liste des canaux</p>

                <div className={styles.grid}>
                    <p>Newsletter</p>
                    <p> / </p>
                    <p>Meetup</p>
                    <p> / </p>
                    <p>...</p>
                </div>
            </main>

            <Footer styles={styles} />
        </div>
    );
}
