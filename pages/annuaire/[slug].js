import Head from 'next/head';

import { Favicon } from '@/components/Favicon';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';
import { OrganizationPage } from '@/components/organisations/Page';
import styles from '@/styles/Home.module.css';

const API_URL = process.env.API_URL;

export async function getStaticPaths() {
    const organizations = await fetch(`${API_URL}/organizations?perPage=100`).then(apiResponse => apiResponse.json());

    const paths = organizations.map(organization => ({
        params: { slug: organization.identifier },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
    const organization = await fetch(`${API_URL}/organizations/${slug}`).then(apiResponse => apiResponse.json());

    if (!organization) {
        return {
            notFound: true,
        };
    }

    return {
        props: { organization },
    };
}

const Organization = ({ organization = {} }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{organization.name} - CaenCamp</title>
                <Favicon />
            </Head>
            <Menu styles={styles} />
            <OrganizationPage styles={styles} organization={organization} />

            <Footer styles={styles} />
        </div>
    );
};

export default Organization;
