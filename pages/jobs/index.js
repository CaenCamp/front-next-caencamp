import Head from 'next/head';
import Link from 'next/link';

import { Favicon } from '../../components/Favicon';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import styles from '../../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Les offres d'emploi dans le Calvados</title>
                <Favicon />
            </Head>

            <main className={styles.main}>
                <Menu styles={styles} />
                <h1 className={styles.title}>Les offres d'emploi dans le Calvados</h1>

                <p className={styles.description}>Liste avec filtres</p>
                <ul>
                    <li>
                        <Link href="/jobs/dev-rust">Développeur Rust disponible</Link>
                    </li>
                </ul>
            </main>

            <Footer styles={styles} />
        </div>
    );
}
