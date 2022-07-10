import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
const Projects: NextPage = () => {
    return (
        <Flex
            width="100%"
            height="100%"
            alignItems={'center'}
            justifyContent={'center'}
        >
            WIP - head over to my github for a peek into my past projects.
            <NextLink href="https://outpost.run" target={'_blank'} passHref>
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
        </Flex>
    );
};
export default Projects;
