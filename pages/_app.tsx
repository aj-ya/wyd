import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/footer';
import Header from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Head>
                <title>Ajeya Bhat</title>
                <meta
                    name="description"
                    content="portfolio website of ajeya bhat"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;
