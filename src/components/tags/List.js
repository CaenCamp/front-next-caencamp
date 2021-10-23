export const TagList = ({ tags }) => (
    <ul className="clean-list">
        {tags.map(tag => (
            <li key={tag}>
                <span className="tag">{tag}</span>
            </li>
        ))}
    </ul>
);
