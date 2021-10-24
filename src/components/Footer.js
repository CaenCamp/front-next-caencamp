import Image from 'next/image';
import Link from 'next/link';

import githubLogo from '../../public/github.svg';
import licence from '../../public/licence.png';
import twitterLogo from '../../public/twitter.svg';

export const Footer = () => (
    <footer className="global-footer">
        <div className="l-center">
            <div className="global-footer__links">
                <div className="l-cluster">
                    <ul className="clean-list">
                        <li>
                            <Link href="/contact">Restons en contact</Link>
                        </li>
                        <li>
                            <Link href="/call-for-speaker">Proposer un talk</Link>
                        </li>
                    </ul>
                </div>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <ul className="clean-list" role="list">
                    <li>
                        <Link className="with-icon--larger" href="https://twitter.com/caencamp">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>
                                <Image
                                    className="icon icon--larger"
                                    src={twitterLogo}
                                    width="20"
                                    height="20"
                                    alt="Le CaenCamp sur Twitter"
                                    aria-hidden="true"
                                />
                                <span className="visuallyhidden">Le CaenCamp sur Twitter</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link className="with-icon--larger" href="https://github.com/CaenCamp">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a>
                                <Image
                                    className="icon icon--larger"
                                    src={githubLogo}
                                    width="20"
                                    height="20"
                                    alt="Le CaenCamp sur GitHub"
                                    aria-hidden="true"
                                />
                                <span className="visuallyhidden">Le CaenCamp sur GitHub</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <p className="copyright">
                <Link className="with-icon--larger" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                        <Image
                            className="icon icon--larger"
                            src={licence}
                            width="88"
                            height="31"
                            alt="Licence CC BY-NC-SA"
                            aria-hidden="true"
                        />
                        <span className="visuallyhidden">Licence CC BY-NC-SA</span>
                    </a>
                </Link>{' '}
                Contenus sous licence{' '}
                <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" passHref>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                        <abbr title="Attribution-NonCommercial-ShareAlike 4.0 International ">CC BY-NC-SA</abbr>
                    </a>
                </Link>{' '}
                - 2021 - CaenCamp.
            </p>
        </div>
    </footer>
);
