export const INITIALISATION = 'initialisation';
export const SELECT_TAG = 'select-tag';
export const SELECT_YEAR = 'select-year';
export const SELECT_SPEAKER = 'select-speaker';
export const TOGGLE_ONLY_VIDEO = 'toggle-only-video';

export const initialState = {
    events: [],
    eventsToDisplay: [],
    availableSpeakers: [],
    selectedSpeaker: null,
    availableYears: [],
    selectedYear: null,
    tags: [],
    selectedTags: [],
    onlyWithVideo: false,
};

const extractTags = events => {
    const tags = events.reduce((acc, event) => {
        return [...acc, ...event.tags];
    }, []);

    return Array.from(new Set(tags)).sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
};

const extractSpeakers = events => {
    const existingSpeaker = [];
    return events
        .reduce((acc, event) => {
            const speakers = event.performers
                .map(speaker => {
                    if (existingSpeaker.includes(speaker.identifier)) {
                        return null;
                    }
                    existingSpeaker.push(speaker.identifier);
                    return speaker;
                })
                .filter(sp => sp);

            return [...acc, ...speakers];
        }, [])
        .sort((a, b) => {
            if (a.identifier < b.identifier) return -1;
            if (a.identifier > b.identifier) return 1;
            return 0;
        });
};

const extractYears = events => {
    return events
        .reduce((acc, event) => {
            const eventDate = new Date(event.startDate);
            const year = eventDate.getFullYear();
            if (acc.includes(year)) {
                return acc;
            }

            return [...acc, year];
        }, [])
        .sort((a, b) => {
            if (a < b) return 1;
            if (a > b) return -1;
            return 0;
        });
};

export const reducer = (state, action) => {
    switch (action.type) {
        case INITIALISATION: {
            return {
                ...initialState,
                events: action.payload.events,
                eventsToDisplay: action.payload.events,
                tags: extractTags(action.payload.events),
                availableSpeakers: extractSpeakers(action.payload.events),
                availableYears: extractYears(action.payload.events),
            };
        }
        case SELECT_TAG: {
            return state;
        }
        case SELECT_YEAR: {
            return {
                ...state,
                selectedYear: action.payload,
            };
        }
        case SELECT_SPEAKER: {
            return {
                ...state,
                selectedSpeaker: action.payload,
            };
        }
        case TOGGLE_ONLY_VIDEO: {
            const eventsToDisplay = !state.onlyWithVideo
                ? state.events.filter(event => !!event.hasVideo)
                : [...state.events];
            return {
                ...state,
                onlyWithVideo: !state.onlyWithVideo,
                eventsToDisplay,
                tags: extractTags(eventsToDisplay),
                availableSpeakers: extractSpeakers(eventsToDisplay),
                availableYears: extractYears(eventsToDisplay),
            };
        }
        default: {
            return state;
        }
    }
};
