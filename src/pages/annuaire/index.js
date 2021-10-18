import Head from 'next/head';

import { OrganizationListItem } from '@/components/organisations/ListItem';

const API_URL = process.env.API_URL;

export async function getServerSideProps() {
    const organizations = await fetch(`${API_URL}/organizations?perPage=100`).then(apiResponse => apiResponse.json());

    return {
        props: { organizations },
    };
}

export default function Organizations({ organizations }) {
    return (
        <>
            <Head>
                <title>Les stuctures liées au numérique dans le Calvados</title>
            </Head>
            <h1 className="title">Les stuctures liées au numérique dans le Calvados</h1>
            <p className="description">Liste avec filtres</p>
            <ul>
                {organizations.map(organization => (
                    <OrganizationListItem key={organization.identifier} organization={organization} />
                ))}
            </ul>
        </>
    );
}
