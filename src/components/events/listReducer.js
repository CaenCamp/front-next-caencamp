export const INITIALISATION = 'initialisation';
export const SELECT_TAG = 'select-tag';
export const SELECT_YEAR = 'select-year';
export const SELECT_SPEAKER = 'select-speaker';
export const TOGGLE_ONLY_VIDEO = 'toggle-only-video';
export const RESET = 'reset';

export const initialState = {
    events: [],
    eventsToDisplay: [],
    availableSpeakers: [],
    selectedSpeaker: 'null',
    availableYears: [],
    selectedYear: 'null',
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

const computeSelectedTags = (tags, selectedTag) => {
    if (tags.includes(selectedTag)) {
        return tags.filter(tag => tag !== selectedTag);
    }

    return [...tags, selectedTag];
};

const eventMeetTagsfilter = (event, tagsfilter) => {
    if (!tagsfilter.length) return true;
    return tagsfilter.some(tag => event.tags.includes(tag));
};
const eventMeetYearFilter = (event, yearFilter) => {
    return yearFilter === 'null' ? true : event.startDate.includes(yearFilter);
};
const eventMeetSpeakerFilter = (event, speakerFilter) => {
    return speakerFilter === 'null'
        ? true
        : !!event.performers.find(performer => performer.identifier === speakerFilter);
};
const eventMeetWithVideoFilter = (event, withVideofiler) => {
    return withVideofiler ? !!event.hasVideo : true;
};
const filterEventsToDisplay = ({ events, tagsfilter, yearFilter, speakerFilter, withVideofiler }) =>
    events.filter(
        event =>
            eventMeetYearFilter(event, yearFilter) &&
            eventMeetSpeakerFilter(event, speakerFilter) &&
            eventMeetTagsfilter(event, tagsfilter) &&
            eventMeetWithVideoFilter(event, withVideofiler),
    );

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
        case RESET: {
            return {
                ...initialState,
                events: state.events,
                eventsToDisplay: state.events,
                tags: extractTags(state.events),
                availableSpeakers: extractSpeakers(state.events),
                availableYears: extractYears(state.events),
            };
        }
        case SELECT_TAG: {
            const newSelectedTag = computeSelectedTags(state.selectedTags, action.payload);
            const eventsToDisplay = filterEventsToDisplay({
                events: state.events,
                tagsfilter: newSelectedTag,
                yearFilter: state.selectedYear,
                speakerFilter: state.selectedSpeaker,
                withVideofiler: state.onlyWithVideo,
            });
            return {
                ...state,
                selectedTags: newSelectedTag,
                eventsToDisplay,
            };
        }
        case SELECT_YEAR: {
            const eventsToDisplay = filterEventsToDisplay({
                events: state.events,
                tagsfilter: state.selectedTags,
                yearFilter: action.payload,
                speakerFilter: state.selectedSpeaker,
                withVideofiler: state.onlyWithVideo,
            });
            return {
                ...state,
                selectedYear: action.payload,
                eventsToDisplay,
            };
        }
        case SELECT_SPEAKER: {
            const eventsToDisplay = filterEventsToDisplay({
                events: state.events,
                tagsfilter: state.selectedTags,
                yearFilter: state.selectedYear,
                speakerFilter: action.payload,
                withVideofiler: state.onlyWithVideo,
            });
            return {
                ...state,
                selectedSpeaker: action.payload,
                eventsToDisplay,
            };
        }
        case TOGGLE_ONLY_VIDEO: {
            const eventsToDisplay = filterEventsToDisplay({
                events: state.events,
                tagsfilter: state.selectedTags,
                yearFilter: state.selectedYear,
                speakerFilter: state.selectedSpeaker,
                withVideofiler: !state.onlyWithVideo,
            });
            return {
                ...state,
                onlyWithVideo: !state.onlyWithVideo,
                eventsToDisplay,
            };
        }
        default: {
            return state;
        }
    }
};
