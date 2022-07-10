import { Box, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import NavLink from '../components/navLink';
const WhoIs: NextPage = () => {
    return (
        <Flex
            width="100%"
            height="100%"
            py={4}
            alignItems={'center'}
            justifyContent={'center'}
        >
            view my{' '}
            <NavLink
                linkObj={{ name: 'resume', to: '/resume.pdf' }}
                textDecoration={'underline'}
                textDecorationStyle={'wavy'}
            />
            .
        </Flex>
    );
};
export default WhoIs;
