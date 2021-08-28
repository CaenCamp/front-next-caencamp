import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { Menu } from '../components/Menu';
import { Favicon } from '../components/Favicon';
import { Footer } from '../components/Footer';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Les CaenCamp</title>
                <Favicon />
            </Head>

            <main className={styles.main}>
                <Menu styles={styles} />
                <h1 className={styles.title}>Bienvenue sur le site des CaenCamp</h1>

                <p className={styles.description}>Présentation</p>

                <div className={styles.grid}>
                    <p>Les prochains events</p>
                    <p> / </p>
                    <p>Les prochains récents</p>
                </div>
            </main>

            <Footer styles={styles} />
        </div>
    );
}
