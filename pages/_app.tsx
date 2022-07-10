import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Footer from '../components/footer';
import Header from '../components/header';

const theme = extendTheme({
    colors: {
        text: '#EB1D36',
        background: '#F5EDDC',
        primary: '#A2B5BB',
        secondary: '#CFD2CF',
        modes: {
            dark: {
                text: '#EEEEEE',
                background: '#232931',
                secondary: '#393E46',
                primary: '#4ECCA3',
            },
        },
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
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
