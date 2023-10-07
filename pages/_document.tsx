import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#fff" />
                <meta
                    name="keywords"
                    content="frontend,protfolio,개발자 포트폴리오"
                />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="개발자 박가인 포트폴리오" />
                <meta
                    property="twitter:url"
                    content="https://www.parkgaini.com/"
                />
                <meta
                    name="google-site-verification"
                    content="OvmB0ypzdXissvlYbc8oLACPGoLHIPTlBRnBNkD6XIw"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('SW registered: ', registration)
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError)
            })
    })
}
