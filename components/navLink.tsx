import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const NavLink = ({
    linkObj,
    ...PassProps
}: {
    [key: string]: any;
    linkObj: { name: string; to: string };
}) => (
    <NextLink href={linkObj.to} passHref>
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                fontWeight: 'bold',
                // bg: useColorModeValue('gray.200', 'gray.700'),
                transform: 'scale(1.05)',
            }}
            _active={{
                textDecoration: 'none',
                fontWeight: 'bold',
                // bg: useColorModeValue('gray.200', 'gray.700'),
                transform: 'scale(1.05)',
            }}
            transition={'0.2 ease-in-out'}
            {...PassProps}
        >
            {linkObj.name}
        </Link>
    </NextLink>
);
export default NavLink;
