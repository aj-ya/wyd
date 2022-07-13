import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/footer';
import Header from '../components/header';
import theme from '../theme';

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
            <Box
                as="main"
                bg={'cooler.background'}
                color="cooler.text"
                minHeight="calc(100vh - 125px)"
                width="100vw"
            >
                <Component {...pageProps} />
            </Box>
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;
