/* eslint jsx-a11y/anchor-is-valid: 0 */
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/logoFondBlanc.png';

export const Menu = () => (
    <nav id="global-nav" aria-label="Main">
        <div className="global-nav__inner l-center">
            <Link href="/">
                <a className="logo-link">
                    <Image width="150" height="77" src={logo} alt="Logo CaenCamp" role="img" />
                    <span className="visuallyhidden">Acceuil du CaenCamp</span>
                </a>
            </Link>
            <ul className="clean-list">
                <li className="top-nav-item">
                    <Link href="/">
                        <a className="nav-link">Accueil</a>
                    </Link>
                </li>
                <li className="top-nav-item">
                    <Link href="/evenements">
                        <a className="nav-link">Les événement</a>
                    </Link>
                </li>
                <li className="top-nav-item">
                    <Link href="/speakers">
                        <a className="nav-link">Les speakers</a>
                    </Link>
                </li>
                <li className="top-nav-item">
                    <Link href="/jobs">
                        <a className="nav-link">Les offres d'emploi</a>
                    </Link>
                </li>
                <li className="top-nav-item">
                    <Link href="/annuaire">
                        <a className="nav-link">Les boites du numérique</a>
                    </Link>
                </li>
                <li className="top-nav-item">
                    <Link href="/sponsors">
                        <a className="nav-link">Les sponsors</a>
                    </Link>
                </li>
                <li className="top-nav-item">
                    <Link href="/association">
                        <a className="nav-link">L'association</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);
