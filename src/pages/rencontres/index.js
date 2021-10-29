import Head from 'next/head';
import { useEffect, useReducer } from 'react';

import { EventListItem } from '@/components/events/ListItem';
import {
    INITIALISATION,
    initialState,
    reducer,
    RESET,
    SELECT_SPEAKER,
    SELECT_TAG,
    SELECT_YEAR,
    TOGGLE_ONLY_VIDEO,
} from '@/components/events/listReducer';
import SearchFilters from '@/components/events/SearchFilters';

const API_URL = process.env.API_URL;

export async function getStaticProps() {
    const [events, tags] = await Promise.all([
        fetch(`${API_URL}/events?category=CaenCamp&perPage=100`).then(apiResponse => apiResponse.json()),
        fetch(`${API_URL}/tags?perPage=100`).then(apiResponse => apiResponse.json()),
    ]);

    return {
        props: { events, tags },
        revalidate: 3600, // In seconds
    };
}

export default function EventList({ events }) {
    const [
        {
            availableSpeakers,
            availableYears,
            eventsToDisplay,
            onlyWithVideo,
            selectedSpeaker,
            selectedTags,
            selectedYear,
            tags,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    const initialisation = events =>
        dispatch({
            type: INITIALISATION,
            payload: { events },
        });

    useEffect(() => {
        if (events) initialisation(events);
    }, [events]);

    const actions = {
        selectSpeaker: speakerId =>
            dispatch({
                type: SELECT_SPEAKER,
                payload: speakerId,
            }),
        selectTag: tag =>
            dispatch({
                type: SELECT_TAG,
                payload: tag,
            }),
        selectYear: year =>
            dispatch({
                type: SELECT_YEAR,
                payload: year,
            }),
        toggleOnlyVideo: () =>
            dispatch({
                type: TOGGLE_ONLY_VIDEO,
            }),
        reset: () =>
            dispatch({
                type: RESET,
            }),
    };

    return (
        <>
            <Head>
                <title>Les rencontres du CaenCamp</title>
                <meta name="description" content="Toutes les rencontres du CaenCamp depuis 2012" />
            </Head>
            <SearchFilters
                actions={actions}
                availableSpeakers={availableSpeakers}
                availableYears={availableYears}
                eventsToDisplay={eventsToDisplay}
                onlyWithVideo={onlyWithVideo}
                selectedSpeaker={selectedSpeaker}
                selectedTags={selectedTags}
                selectedYear={selectedYear}
                tags={tags}
            />
            <div className="event-list">
                {eventsToDisplay.length > 0 &&
                    eventsToDisplay.map(event => <EventListItem key={event.identifier} event={event} />)}
                {eventsToDisplay.length === 0 && (
                    <p>Il n'existe pas de rencontre répondant à vos critères de filtrage.</p>
                )}
            </div>
        </>
    );
}
