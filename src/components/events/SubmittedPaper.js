import Head from 'next/head';

const SubmittedPaper = ({ submittedPaper }) => {
    return (
        <>
            <Head>
                <title>Un grand merci pour votre proposition !</title>
            </Head>
            <div className="event-list">
                <h1>Un grand merci pour votre proposition !</h1>
                <div className={'card card--event meeting'} data-component="card">
                    <div className="card__text">
                        <div className="l-sidebar">
                            <div>
                                <div className="not-sidebar">
                                    <span className="txt-eris">Édition #?</span>
                                    <h2 className="card__heading">{submittedPaper.title}</h2>
                                    <p>{submittedPaper.description}</p>
                                </div>

                                <div className="sidebar">
                                    <div className="date-location">
                                        <div>
                                            <img
                                                src="/calendar.svg"
                                                width="18"
                                                height="20"
                                                alt="calendrier"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div>
                                            <p>
                                                <time>A définir</time>
                                            </p>
                                            <p>Le Dôme</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-cluster">
                            <div>
                                <p>Speaker: {submittedPaper.name}</p>
                            </div>
                        </div>
                        <p className="txt-pluto">Durée: 45 min</p>
                        <div className="l-cluster">
                            <ul className="clean-list">
                                <li>
                                    <span className="cc-tag">tag à définir</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>Nous prendrons rapidement contact avec vous par ce biais : {submittedPaper.contact}</p>
            </div>
        </>
    );
};

export default SubmittedPaper;
