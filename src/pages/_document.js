import Document, { Head, Html, Main, NextScript } from 'next/document';

class CaenCampDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en" className="no-js">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="stylesheet"
                        id="advanced-stylesheet"
                        href="/css/advanced.min.css?ver=1.4.1"
                        media={`
                        only print,
                        only all and (pointer: fine), only all and (pointer: coarse), only all and (pointer: none),
                        only all and (min--moz-device-pixel-ratio:0) and (display-mode:browser), (min--moz-device-pixel-ratio:0) and (display-mode:fullscreen)`}
                    />
                    <link rel="stylesheet" href="/css/print.min.css" media="print" />
                    <meta name="robots" content="noindex" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CaenCampDocument;
