import Link from 'next/link';

export const Menu = ({ styles }) => (
    <nav>
        <ul className={styles.nav}>
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
                <Link href="/about">Les CaenCamp</Link>
            </li>
        </ul>
    </nav>
);
