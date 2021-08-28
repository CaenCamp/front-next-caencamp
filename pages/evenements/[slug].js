import Head from 'next/head';
import { useRouter } from 'next/router';

import { Favicon } from '../../components/Favicon';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import styles from '../../styles/Home.module.css';

const Event = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className={styles.container}>
            <Head>
                <title>{slug} - CaenCamp</title>
                <Favicon />
            </Head>

            <main className={styles.main}>
                <Menu styles={styles} />
                <h1 className={styles.title}>{slug}</h1>

                <p className={styles.description}>Détails de l'événement</p>
            </main>

            <Footer styles={styles} />
        </div>
    );
};

export default Event;
