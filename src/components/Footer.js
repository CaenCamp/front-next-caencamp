import Link from 'next/link';

export const Footer = () => (
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
);
