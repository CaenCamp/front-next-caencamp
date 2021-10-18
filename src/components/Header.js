import Image from 'next/image';
import Link from 'next/link';

import { Menu } from '@/components/Menu';

import betaLogo from '../../public/beta.svg';

export const Header = () => (
    <header className="global-header">
        <span role="status" aria-live="polite"></span>
        <div className="banner">
            <div className="banner__inner l-center">
                <Image src={betaLogo} className="icon icon--beta" alt="Beta icon" role="img" />
                <p>
                    This is a new website. <Link href="https://github.com/w3c/w3c-website">Give feedback</Link> to help
                    us improve it.
                </p>
            </div>
        </div>
        <Menu />
    </header>
);
