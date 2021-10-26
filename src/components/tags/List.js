/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

export const TagFilters = ({ handleTagSelect, selectedTags, tags }) => {
    return (
        <ul className="tags-list">
            {tags.map(tag => (
                <li
                    key={tag}
                    className={selectedTags.includes(tag) ? 'cc-tag-filter tag-selected' : 'cc-tag-filter'}
                    onClick={() => handleTagSelect(tag)}
                    onKeyPress={ev => {
                        if (ev.key === 's') {
                            handleTagSelect(tag);
                        }
                    }}
                >
                    {tag}
                </li>
            ))}
        </ul>
    );
};

export const TagList = ({ tags }) => (
    <ul className="clean-list">
        {tags.map(tag => (
            <li key={tag.identifier}>
                <span className="tag">{tag.label}</span>
            </li>
        ))}
    </ul>
);
