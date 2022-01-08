import React from 'react';

import CallForSpeakerForm from './CallForSpeakerForm';

export default {
    title: 'Événements/CallForSpeaker',
    component: CallForSpeakerForm,
    parameters: {
        nextRouter: {
            pathname: '/call-for-speaker',
        },
    },
};

const Template = args => <CallForSpeakerForm {...args} />;

export const emptyForm = Template.bind({});
emptyForm.storyName = 'Formulaire vide';
emptyForm.args = {};
