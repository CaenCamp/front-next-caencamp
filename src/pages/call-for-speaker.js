import Head from 'next/head';
import { useState } from 'react';

import CallForSpeakerForm from '@/components/events/CallForSpeakerForm';
import SubmittedPaper from '@/components/events/SubmittedPaper';

export default function CallForSpeaker() {
    const [submittedPaper, setSubmittedPaper] = useState(null);

    if (submittedPaper !== null) {
        return <SubmittedPaper submittedPaper={submittedPaper} />;
    }

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
            <CallForSpeakerForm handleValidSubmission={setSubmittedPaper} />
        </>
    );
}
