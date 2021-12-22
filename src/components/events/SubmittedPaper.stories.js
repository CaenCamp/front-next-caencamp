import React from 'react';

import SubmittedPaper from './SubmittedPaper';

export default {
    title: 'Événements/CallForSpeaker',
    component: SubmittedPaper,
    parameters: {
        nextRouter: {
            pathname: '/call-for-speaker',
        },
    },
};

const Template = args => <SubmittedPaper {...args} />;

export const valideProposal = Template.bind({});
valideProposal.storyName = 'Proposition soumise';
valideProposal.args = {
    submittedPaper: {
        name: 'John Doe',
        title: 'Event Sourcing Made Easy',
        description:
            "Event sourcing, CQRS... Ces termes reviennent régulièrement lorsqu'on parle de scalability ou d'applications haute concurrence. Mais, qu'est-ce qui se cache exactement sous ces termes ? En avez-vous réellement besoin sur votre application ?",
        contact: 'Par télépone au 0606060606 ou par email none@sorry.com',
    },
};
