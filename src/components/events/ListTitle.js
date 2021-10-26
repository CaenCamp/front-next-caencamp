const nbEventsLabel = (nbEvents, hasFilter) => {
    if (!hasFilter) {
        return `Toutes les ${nbEvents} rencontres`;
    }

    if (!nbEvents) {
        return `Aucune rencontre`;
    }

    return nbEvents === 1 ? 'La rencontre' : `Les ${nbEvents} rencontres`;
};

const ListTitle = ({ eventsToDisplay, tagsFilters, hasWithVideoFilter, yearFilter, speakerFilter }) => {
    const hasFilter =
        tagsFilters.length > 0 && hasWithVideoFilter === false && yearFilter === 'null' && speakerFilter === 'null'
            ? false
            : true;
    const nbLabel = nbEventsLabel(eventsToDisplay.length, hasFilter);
    const videoLabel = !hasWithVideoFilter ? '' : eventsToDisplay.length > 1 ? ' filmées' : ' filmée';
    const speakerLabel = speakerFilter !== 'null' ? `de ${speakerFilter}` : '';
    const fromLabel = yearFilter !== 'null' ? `en ${yearFilter}` : 'depuis 2012';
    const tagsLabel = !tagsFilters.length
        ? ''
        : tagsFilters.length === 1
        ? ` portant le tag ${tagsFilters[0]}`
        : ` portant les tags ${tagsFilters.join(' ou ')}`;
    return (
        <p className="lead">
            {nbLabel}
            {videoLabel} {speakerLabel} {fromLabel}
            {tagsLabel}.
        </p>
    );
};

export default ListTitle;
