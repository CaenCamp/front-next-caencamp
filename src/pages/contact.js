import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Les CaenCamp - contacts</title>
            </Head>
            <h1 className="title">Restons en contact</h1>
            <p className="description">Liste des canaux</p>
            <div className="grid">
                <p>Newsletter</p>
                <p> / </p>
                <p>Meetup</p>
                <p> / </p>
                <p>...</p>
            </div>
        </>
    );
}
