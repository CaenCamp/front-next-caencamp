import '@/styles/core.css';
import '@/styles/cc_css.css';

import Head from 'next/head';

import Layout from '@/components/Layout';

function CaenCampApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout data={pageProps}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default CaenCampApp;
