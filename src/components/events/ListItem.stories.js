import React from 'react';

import fixtures from './fixtures.json';
import { EventListItem } from './ListItem';

export default {
    title: 'Événements/Listes',
    component: EventListItem,
    parameters: {
        nextRouter: {
            pathname: '/',
        },
    },
};

const Template = args => (
    <main id="main">
        <div className="event-list">
            <EventListItem {...args} />
        </div>
    </main>
);

export const ListItemSingleTalk = Template.bind({});
ListItemSingleTalk.storyName = 'Événement avec un talk';
ListItemSingleTalk.args = { event: fixtures[0] };

export const ListItemDoubleTalk = Template.bind({});
ListItemDoubleTalk.storyName = 'Événement avec deux talks';
ListItemDoubleTalk.args = { event: fixtures[1] };
