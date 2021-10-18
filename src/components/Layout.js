import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Layout = ({ children }) => {
    return (
        <>
            <a className="skip-link" href="#main">
                Aller directement au contenu
            </a>
            <div className="grid-wrap">
                <div className="wrap">
                    <Header />
                    <main id="main">{children}</main>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
