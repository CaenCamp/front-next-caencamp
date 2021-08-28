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
                <title>Les événements CaenCamp</title>
                <Favicon />
            </Head>

            <main className={styles.main}>
                <Menu styles={styles} />
                <h1 className={styles.title}>Les événements</h1>

                <p className={styles.description}>Liste avec filtre par tags</p>
                <ul>
                    <li>
                        <Link href="/evenements/elixir-pourquoi-pas">Elixir ? Pourquoi pas.</Link>
                    </li>
                </ul>
            </main>

            <Footer styles={styles} />
        </div>
    );
}
