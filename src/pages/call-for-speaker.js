import Head from 'next/head';

export default function CallForSpeaker() {
    return (
        <>
            <Head>
                <title>Les CaenCamp - Proposer un talk</title>
            </Head>
            <div className="u-full-width hero hero--listing">
                <div className="l-center">
                    <h1>Proposer un talk</h1>
                    <p className="lead">
                        Les bonnes raisons de faire un talk sont multiples et internet regorge de posts de blog les
                        énumérant. Mais une chose est certaine : la communauté en profitera et vous en profiterez. Alors
                        n’hésitez pas à proposer un sujet !
                    </p>
                </div>
            </div>
            <form noValidate>
                <div className="field">
                    <label htmlFor="name">
                        <span className="field-label">
                            Qui êtes-vous ? <span className="required">(obligatoire)</span>
                        </span>
                    </label>
                    <div className="field-hint" id="hint-name">
                        Exemple: Margaret Hamilton, Nasa.
                    </div>
                    <input type="text" id="name" name="name" autoComplete="name" aria-describedby="hint-name" />
                </div>

                <div className="field">
                    <label htmlFor="title">
                        <span className="field-label">
                            Quel serait le titre de votre intervention ? <span className="required">(obligatoire)</span>
                        </span>
                    </label>
                    <div className="field-hint" id="hint-title">
                        Exemple: Plutôt que de vous embêter avec TypeScript, choisissez un vrai langage typé !
                    </div>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        autoComplete="off"
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck="true"
                        inputMode="text"
                        aria-describedby="hint-title"
                    />
                </div>

                <div className="field">
                    <label htmlFor="description">
                        <span className="field-label">
                            En quelques mots <span className="required">(200 caractéres minimum, obligatoire)</span>
                        </span>
                    </label>
                    <textarea id="description" name="description"></textarea>
                </div>

                <div className="field">
                    <label htmlFor="contact">
                        <span className="field-label">
                            Comment peut-on vous contacter ? <span className="required">(obligatoire)</span>
                        </span>
                    </label>
                    <div className="field-hint" id="hint-contact">
                        Exemple: votre email, votre identifiant twitter, votre téléphone ...
                    </div>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        autoComplete="off"
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck="false"
                        inputMode="text"
                        aria-describedby="hint-contact"
                    />
                </div>

                <button type="submit" className="button">
                    Soumettre votre proposition.
                </button>
            </form>
        </>
    );
}
