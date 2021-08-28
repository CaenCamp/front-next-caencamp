import Link from 'next/link';

export const Footer = ({ styles }) => (
    <footer className={styles.footer}>
        <p>Le footer</p>
        <ul className={styles.nav}>
            <li>
                <Link href="/contact">Restons en contact</Link>
            </li>
            <li>
                <Link href="/call-for-speaker">Proposer un talk</Link>
            </li>
        </ul>
    </footer>
);
