import { useRouter } from 'next/router';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Menu } from '@/components/Menu';

export const Header = ({ data }) => {
    const router = useRouter();
    return (
        <header className="global-header">
            <span role="status" aria-live="polite"></span>
            <Menu router={router} />
            <Breadcrumbs router={router} data={data} />
        </header>
    );
};
