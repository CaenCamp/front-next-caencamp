export const Breadcrumbs = ({ data, router }) => {
    if (data.event && router.pathname === '/evenements/[slug]') {
        return (
            <nav id="breadcrumb" aria-label="Breadcrumb">
                <div className="l-center">
                    <div className="l-cluster">
                        <ol className="breadcrumbs clean-list">
                            <li>
                                <a href="/evenements">Les événements</a>
                            </li>
                            <li>
                                <a href={router.asPath} aria-current="page">
                                    {data.event.name}
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </nav>
        );
    }

    return null;
};
