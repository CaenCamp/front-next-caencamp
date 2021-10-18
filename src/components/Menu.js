import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/w3c-logo.svg';

export const Menu = () => (
    <nav id="global-nav" aria-label="Main">
        <div className="global-nav__inner l-center">
            <Link className="logo-link" href="/">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                    <span className="logo">
                        <Image src={logo} alt="Logo" role="img" />
                    </span>
                    <span className="visuallyhidden">W3C homepage</span>
                </a>
            </Link>
        </div>
    </nav>
);

// export const Menu = () => (
//     <nav>
//         <ul className="nav">
//             <li>
//                 <Link href="/">Accueil</Link>
//             </li>
//             <li>
//                 <Link href="/evenements">Les événement</Link>
//             </li>
//             <li>
//                 <Link href="/speakers">Les speakers</Link>
//             </li>
//             <li>
//                 <Link href="/jobs">Les offres d'emploi</Link>
//             </li>
//             <li>
//                 <Link href="/annuaire">Les boites du numérique</Link>
//             </li>
//             <li>
//                 <Link href="/sponsors">Les sponsors</Link>
//             </li>
//             <li>
//                 <Link href="/association">L'association</Link>
//             </li>
//         </ul>
//     </nav>
// );
