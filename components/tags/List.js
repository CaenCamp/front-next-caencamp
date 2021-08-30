export const TagList = ({ tags }) => (
    <p>
        {tags.map(tag => (
            <span key={tag.identifier}>{tag.label} / </span>
        ))}
    </p>
);
