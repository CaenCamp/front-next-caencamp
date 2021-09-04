import React from 'react';

import { EventListItem } from './ListItem';

export default {
    title: 'Events/List',
    component: EventListItem,
    parameters: {
        nextRouter: {
            pathname: '/',
        },
    },
};

const event = { identifier: 'foo', name: "Titre de l'événement" };

const Template = args => (
    <ul>
        <EventListItem {...args} />
    </ul>
);

export const ListItem = Template.bind({});
ListItem.storyName = 'List item';
ListItem.args = { event };
