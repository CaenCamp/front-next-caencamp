import Image from 'next/image';
import Link from 'next/link';

import githubLogo from '../../public/github.svg';
import twitterLogo from '../../public/twitter.svg';

export const Footer = () => (
    <footer className="global-footer">
        <div className="l-center">
            <div className="global-footer__links">
                <div className="l-cluster">
                    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                    <ul className="clean-list" role="list">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                    </ul>
                </div>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <ul className="clean-list" role="list">
                    <li>
                        <Link className="with-icon--larger" href="https://twitter.com/W3C">
                            <>
                                <Image
                                    className="icon icon--larger"
                                    src={twitterLogo}
                                    width="20"
                                    height="20"
                                    alt="logo twitter"
                                    aria-hidden="true"
                                />
                                <span className="visuallyhidden">W3C on Twitter</span>
                            </>
                        </Link>
                    </li>
                    <li>
                        <Link className="with-icon--larger" href="https://github.com/w3c/">
                            <>
                                <Image
                                    className="icon icon--larger"
                                    src={githubLogo}
                                    width="20"
                                    height="20"
                                    alt="logo github"
                                    aria-hidden="true"
                                />
                                <span className="visuallyhidden">W3C on GitHub</span>
                            </>
                        </Link>
                    </li>
                </ul>
            </div>
            <p className="copyright">
                Copyright © 20XX W3C <sup>®</sup> (
                <Link href="https://www.csail.mit.edu/" passHref>
                    <abbr title="Massachusetts Institute of Technology">MIT</abbr>
                </Link>
                ,{' '}
                <Link href="https://www.ercim.eu/" passHref>
                    <abbr title="European Research Consortium for Informatics and Mathematics">ERCIM</abbr>
                </Link>
                ,<Link href="https://www.keio.ac.jp/">Keio</Link>,{' '}
                <Link href="https://ev.buaa.edu.cn/" passHref>
                    Beihang
                </Link>
                ) <Link href="/Consortium/Legal/ipr-notice">Usage policies apply</Link>.
            </p>
        </div>
    </footer>
);

/*
<footer className="footer">
        <p>Le footer</p>
        <ul className="nav">
            <li>
                <Link href="/contact">Restons en contact</Link>
            </li>
            <li>
                <Link href="/call-for-speaker">Proposer un talk</Link>
            </li>
        </ul>
    </footer>
*/
