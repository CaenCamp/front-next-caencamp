import Link from 'next/link';

export const Menu = () => (
    <nav>
        <ul className="nav">
            <li>
                <Link href="/">Accueil</Link>
            </li>
            <li>
                <Link href="/evenements">Les événement</Link>
            </li>
            <li>
                <Link href="/speakers">Les speakers</Link>
            </li>
            <li>
                <Link href="/jobs">Les offres d'emploi</Link>
            </li>
            <li>
                <Link href="/annuaire">Les boites du numérique</Link>
            </li>
            <li>
                <Link href="/sponsors">Les sponsors</Link>
            </li>
            <li>
                <Link href="/association">L'association</Link>
            </li>
        </ul>
    </nav>
);
