export const EventPage = ({ event }) => (
    <div className="content event">
        <article>
            <div className="intro meeting">
                <h1>{event.name}</h1>
                <p>Online meeting</p>
            </div>
            <p className="lead">Short description of the event</p>

            <a href="path/to/calender-file" className="with-icon--before calendar-link txt-pluto">
                <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 448 512"
                    width="1em"
                    height="1em"
                >
                    <defs />
                    <path d="M336 292v24c0 6.6-5.4 12-12 12h-76v76c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-76h-76c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h76v-76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v76h76c6.6 0 12 5.4 12 12zm112-180v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
                </svg>{' '}
                Add to calendar
            </a>

            <section className="meta">
                <h2 className="visuallyhidden">Event details</h2>
                <dl className="grid">
                    <dt>Date:</dt>
                    <dd>
                        <time dateTime="2021-01-28T18:00Z">
                            28 January 2021, 14:00 - 15:30 Eastern Daylight Time (18:00 - 19:30 UTC)
                        </time>
                    </dd>
                    <dt>Location:</dt>
                    <dd>Online</dd>
                    <dt>Speakers:</dt>
                    <dd>Deidre De Veloper</dd>
                    <dt>Host:</dt>
                    <dd>Jake Weary</dd>
                    <dt className="with-link">Category:</dt>
                    <dd className="with-link">
                        <a href="path/to/page">Category 1</a>
                    </dd>
                    <dt className="with-link">Tags:</dt>
                    <dd className="l-cluster with-link">
                        <ul className="clean-list">
                            <li>
                                <a href="path/to/page">Tag 1</a>
                            </li>
                            <li>
                                <a href="path/to/page">Tag 2</a>
                            </li>
                            <li>
                                <a href="path/to/page">Tag 3</a>
                            </li>
                            <li>
                                <a href="path/to/page">Tag 4</a>
                            </li>
                            <li>
                                <a href="path/to/page">Tag 5</a>
                            </li>
                        </ul>
                    </dd>
                    <dt className="with-link">Website:</dt>
                    <dd className="with-link">
                        <a href="path/to/site">Name of website</a>
                    </dd>
                </dl>
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
                        src="/illustrations/undraw_candidate_ubwv.svg"
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
