export const TagList = ({ tags }) => (
    <ul className="clean-list">
        {tags.map(tag => (
            <li key={tag.identifier}>
                <span className="tag">{tag.label}</span>
            </li>
        ))}
    </ul>
);
