import React from 'react';

import fixtures from './fixtures.json';
import { EventPage } from './Page';

export default {
    title: 'Événements/Page',
    component: EventPage,
    parameters: {
        nextRouter: {
            pathname: '/rencontres',
        },
    },
};

const Template = args => (
    <main id="main">
        <EventPage {...args} />
    </main>
);

export const PageSingleTalk = Template.bind({});
PageSingleTalk.storyName = 'Événement avec un talk';
PageSingleTalk.args = { event: fixtures[0] };

export const PageDoubleTalk = Template.bind({});
PageDoubleTalk.storyName = 'Événement avec deux talks';
PageDoubleTalk.args = { event: fixtures[1] };
