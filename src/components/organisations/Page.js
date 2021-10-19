export const OrganizationPage = ({ organization }) => (
    <div className="content post">
        <article>
            <h1>{organization.name}</h1>
            <div className="sub-head">
                Part of <a href="path/to/page">W3C life</a>
            </div>
            <section className="meta">
                <h2 className="visuallyhidden">Author(s) and publish date</h2>
                <dl>
                    <dt>By:</dt>
                    <dd className="l-cluster">
                        <ul className="clean-list" role="presentation">
                            <li>
                                <p className="with-icon--before with-icon--larger">
                                    <span className="avatar avatar--small icon">
                                        <img src="/phone.svg" width="32" height="32" alt="phone" aria-hidden="true" />
                                    </span>{' '}
                                    Name of author
                                </p>
                            </li>
                            <li>
                                <p className="with-icon--before with-icon--larger">
                                    <span className="avatar avatar--small icon">
                                        <img src="/phone.svg" width="32" height="32" alt="phone" aria-hidden="true" />
                                    </span>{' '}
                                    Name of author
                                </p>
                            </li>
                        </ul>
                    </dd>
                    <dt>Published:</dt>
                    <dd>4 January 2021</dd>
                </dl>
                <a href="#comments" className="skip-to-comments txt-pluto">
                    Skip to 6 Comments
                </a>
            </section>
            <div className="component component--text">
                <h2>Example text component</h2>
                <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                    web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought
                    to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
            </div>
            <figure className="component component--image">
                <div className="l-frame l-frame--16-9">
                    <img
                        src="/illustrations/undraw_pair_programming_njlp.svg"
                        alt="A Macbook screen with code, as seen from over the developer's shoulder"
                    />
                </div>
                <figcaption>
                    <p>
                        The figcaption is not a replacement for the image's <code>alt</code> attribute. It should be
                        used for providing relevant supporting content.
                    </p>
                </figcaption>
            </figure>
        </article>
    </div>
);
