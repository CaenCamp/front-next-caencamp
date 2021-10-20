import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Layout = ({ children, data }) => {
    return (
        <>
            <a className="skip-link" href="#main">
                Aller directement au contenu
            </a>
            <div className="grid-wrap">
                <div className="wrap">
                    <Header data={data} />
                    <main id="main">{children}</main>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
