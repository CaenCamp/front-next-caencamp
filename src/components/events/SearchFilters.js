import { TagFilters } from '@/components/tags/List';

const SearchFilters = ({
    actions,
    availableSpeakers,
    availableYears,
    eventsToDisplay,
    tags,
    onlyWithVideo,
    selectedYear,
    selectedSpeaker,
    selectedTags,
}) => {
    const handleOnlyWithVideoChange = event => {
        event.stopPropagation();
        actions.toggleOnlyVideo();
    };

    const handleYearSelect = event => {
        event.stopPropagation();
        actions.selectYear(event.target.value);
    };

    const handleSpeakerSelect = event => {
        event.stopPropagation();
        actions.selectSpeaker(event.target.value);
    };

    const handleTagSelect = tag => {
        actions.selectTag(tag);
    };

    const handleReset = () => {
        actions.reset();
    };

    return (
        <div className="u-full-width hero hero--listing">
            <div className="l-center">
                <h1>Les événements</h1>
                <p className="lead">Toutes les {eventsToDisplay.length} rencontres depuis 2012.</p>
                <div className="l-sidebar">
                    <div>
                        <div className="not-sidebar">
                            <div className="l-cluster">
                                <TagFilters tags={tags} handleTagSelect={handleTagSelect} selectedTags={selectedTags} />
                            </div>
                        </div>
                        <div className="sidebar">
                            <form noValidate>
                                <div className="field">
                                    <fieldset>
                                        <div className="checkbox-item">
                                            <input
                                                type="checkbox"
                                                name="withVideo"
                                                id="withVideo"
                                                appearance="base"
                                                onChange={handleOnlyWithVideoChange}
                                                checked={onlyWithVideo}
                                            />
                                            <label htmlFor="withVideo">
                                                <span className="field-label">Seulement les événements filmés</span>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="field">
                                    <label htmlFor="selectedYear">
                                        <span className="field-label">Filtrer par année</span>
                                    </label>
                                    <select
                                        id="selectedYear"
                                        name="selectedYear"
                                        onChange={handleYearSelect}
                                        value={selectedYear || ''}
                                    >
                                        <option value="null">Choisir une année</option>
                                        {availableYears.map(year => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="selectedSpeaker">
                                        <span className="field-label">Filtrer par speaker</span>
                                    </label>
                                    <select
                                        id="selectedSpeaker"
                                        name="selectedSpeaker"
                                        onChange={handleSpeakerSelect}
                                        value={selectedSpeaker || ''}
                                    >
                                        <option value="null">Choisir un speaker</option>
                                        {availableSpeakers.map(speaker => (
                                            <option key={speaker.identifier} value={speaker.identifier}>
                                                {speaker.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="input-group">
                                    <button
                                        className="button button--ghost"
                                        type="reset"
                                        onClick={handleReset}
                                        onKeyPress={handleReset}
                                    >
                                        Enlever tout les filtres
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFilters;
