import Head from 'next/head';

import { Favicon } from '../components/Favicon';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Les CaenCamp - Les sponsors</title>
                <Favicon />
            </Head>

            <main className={styles.main}>
                <Menu styles={styles} />
                <h1 className={styles.title}>Les sponsors</h1>

                <p className={styles.description}>Liste des sponsors et structures d'acceuil</p>
            </main>

            <Footer styles={styles} />
        </div>
    );
}
