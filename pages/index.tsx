import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, VStack, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import NextLink from 'next/link';
import SpotifyStatus from '../components/spotifyStatus';

const Home: NextPage = () => {
    return (
        <Flex
            width={'100%'}
            height={'100%'}
            justifyContent={'center'}
            fontSize={['1em', '1.5em', '2em']}
            px={3}
            alignItems={'center'}
        >
            <VStack
                alignItems={'start'}
                color={'#98c1d9'}
                fontFamily={'monospace'}
            >
                <Text fontWeight={'bold'}>Hi, I&apos;m</Text>
                <Text
                    as="h1"
                    fontSize={['4xl', '6xl']}
                    fontWeight={'extrabold'}
                    color="cooler.text"
                >
                    Ajeya Bhat.
                </Text>{' '}
                <Text>
                    Software Developer and active{' '}
                    <abbr title="Free and Open Source Softwares">FOSS</abbr>{' '}
                    Contributer,
                </Text>
                <Text>Currently I&apos;m,</Text>
                <Text>
                    persuing B.Engg @{' '}
                    <NextLink href="https://kletech.ac.in" passHref>
                        <Link
                            textDecoration={'underline'}
                            textDecorationStyle={'dotted'}
                            target={'_blank'}
                            display={['block', 'inline']}
                            color="cooler.text"
                        >
                            KLE Technological University{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </NextLink>
                </Text>
                <Text>
                    working as SDE Intern @{' '}
                    <NextLink
                        href="https://outpost.run"
                        target={'_blank'}
                        passHref
                    >
                        <Link
                            textDecoration={'underline'}
                            textDecorationStyle={'dotted'}
                            target={'_blank'}
                            display={['block', 'inline']}
                            color="cooler.text"
                        >
                            Outpost <ExternalLinkIcon mx="2px" />
                        </Link>
                    </NextLink>
                </Text>
                <Text as="div">
                    Listening to&nbsp;
                    <SpotifyStatus />
                </Text>
            </VStack>
        </Flex>
    );
};

export default Home;
