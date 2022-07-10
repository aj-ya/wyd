import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Stack,
    Center,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NameTag from './nameTag';
import NextLink from 'next/link';

const NavLink = ({ linkObj }: { linkObj: { name: string; to: string } }) => (
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
        >
            {linkObj.name}
        </Link>
    </NextLink>
);

const Header = () => {
    const Links = [
        { name: 'home', to: '/' },
        { name: 'projects', to: '/projects' },
        { name: 'whois', to: '/whois' },
    ];
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box
            as="header"
            px={3}
            width="100vw"
            minH="65px"
            color="cooler.secondaryText"
            bg="cooler.background"
            fontSize={'1.2em'}
            fontFamily={'monospace'}
        >
            <Flex h={16} justifyContent={'space-between'} alignItems={'center'}>
                <NameTag />
                <HStack
                    as={'nav'}
                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}
                >
                    {Links.map((link) => (
                        <NavLink key={link.to} linkObj={link}></NavLink>
                    ))}
                </HStack>
                <HStack display={{ md: 'none', lg: 'none' }}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none', lg: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </HStack>
            </Flex>
            {isOpen ? (
                <Box
                    pb={4}
                    display={{ md: 'none' }}
                    borderBottom="1px"
                    borderRadius="5px"
                    borderColor="cooler.text"
                    fontSize={'1.2em'}
                >
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <Center key={link.to}>
                                <NavLink linkObj={link}></NavLink>
                            </Center>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};
export default Header;
