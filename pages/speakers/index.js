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
                <title>Les speakers des CaenCamp</title>
                <Favicon />
            </Head>

            <main className={styles.main}>
                <Menu styles={styles} />
                <h1 className={styles.title}>Les speakers</h1>

                <p className={styles.description}>Liste</p>
                <ul>
                    <li>
                        <Link href="/speakers/noam-chomsky">Noam Chomsky</Link>
                    </li>
                </ul>
            </main>

            <Footer styles={styles} />
        </div>
    );
}
