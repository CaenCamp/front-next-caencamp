import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Les CaenCamp - contacts</title>
            </Head>
            <div className="component">
                <div className="l-center">
                    <div className="component--group-list__intro">
                        <h1>Restons en contact</h1>
                        Nous essayons de maintenir au mieux plusieurs canaux permettant de maintenir les liens du
                        collectif.
                        <br />
                        Si vous souhaitez vous investir sur le CaenCamp, nous sommes d'ailleurs très demandeurs de
                        personnes motivées pour animer ces différents médias !
                    </div>
                    <div className="component--collapsibles" data-component="collapsibles">
                        <div>
                            <h3 data-heading="collapsibles">
                                Le site web <span>caen.camp</span>
                            </h3>
                            <div>
                                <a href="https://www.meetup.com/fr-FR/CaenCamp/events/rss/">S'abonner au flux RSS</a>
                            </div>
                        </div>
                        <div>
                            <h3 data-heading="collapsibles">
                                Meetup <span>meetup.com</span>
                            </h3>
                            <div>
                                <a href="path/to/page">Voir la page meetup</a>
                            </div>
                        </div>
                        <div>
                            <h3 data-heading="collapsibles">
                                Discord <span>discord.com</span>
                            </h3>
                            <div>
                                <a href="mailto:contact@caen.camp?subject=Demande d'invitation Discord">
                                    Demander à rejoindre le serveur Discord
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 data-heading="collapsibles">
                                Twitter <span>@caencamp</span>
                            </h3>
                            <div>
                                <a href="https://twitter.com/CaenCamp">Nous suivre sur Twitter</a>
                            </div>
                        </div>
                        <div>
                            <h3 data-heading="collapsibles">
                                Github <span>github.com</span>
                            </h3>
                            <div>
                                <a href="https://github.com/CaenCamp">Les projets du Coding CaenCamp</a>
                            </div>
                        </div>
                        <div>
                            <h3 data-heading="collapsibles">
                                YouTube <span>youtube.com</span>
                            </h3>
                            <div>
                                <a href="https://www.youtube.com/channel/UCLX4DP_fDCZ4fsgbUZsGaUw">
                                    Notre chaine Youtube
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
