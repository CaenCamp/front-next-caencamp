/* eslint jsx-a11y/anchor-is-valid: 0 */
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import logo from '../../public/logoFondBlanc.png';

const getActiveMenu = pathname => {
    switch (pathname) {
        case '/':
            return 'home';
        case '/rencontres/[slug]':
        case '/rencontres':
            return 'rencontres';
        case '/speakers/[slug]':
        case '/speakers':
            return 'intervenants';
        default:
            return 'none';
    }
};

export const Menu = ({ router: { pathname } }) => {
    const [activeMenu, setActiveMenu] = useState('none');

    useEffect(() => {
        setActiveMenu(getActiveMenu(pathname));
    }, [pathname]);
    return (
        <nav id="global-nav" aria-label="Main">
            <div className="global-nav__inner l-center">
                <a className={`logo-link${activeMenu === 'home' ? ' logo-selected' : ''}`} href="/">
                    <span className="logo">
                        <Image width="101" height="52" src={logo} alt="Logo CaenCamp" role="img" />
                    </span>
                    <span className="visuallyhidden">Acceuil du CaenCamp</span>
                </a>
                <ul className="clean-list">
                    <li className={`top-nav-item-cc${activeMenu === 'rencontres' ? ' selected' : ''}`}>
                        <Link href="/rencontres">
                            <a className="nav-link">Les rencontres</a>
                        </Link>
                    </li>
                    <li className={`top-nav-item-cc${activeMenu === 'intervenants' ? ' selected' : ''}`}>
                        <Link href="/speakers">
                            <a className="nav-link">Les intervenants</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
