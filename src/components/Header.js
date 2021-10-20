import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Menu } from '@/components/Menu';

import betaLogo from '../../public/beta.svg';

export const Header = ({ data }) => {
    const router = useRouter();
    return (
        <header className="global-header">
            <span role="status" aria-live="polite"></span>
            <div className="banner">
                <div className="banner__inner l-center">
                    <Image src={betaLogo} className="icon icon--beta" alt="Beta icon" role="img" />
                    <p>
                        Cette v2 du site du CaenCamp est en cours de réalisation.{' '}
                        <Link href="https://github.com/CaenCamp/front-next-caencamp">
                            Toute personne souhaitant participer est la bienvenue
                        </Link>
                        .
                    </p>
                </div>
            </div>
            <Menu router={router} />
            <Breadcrumbs router={router} data={data} />
        </header>
    );
};
