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
const Links = ['Home', 'Projects', 'Who is', 'Contact'];
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NameTag from './nameTag';

const NavLink = ({ children }: { children: ReactNode }) => (
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
        href={'#'}
    >
        {children}
    </Link>
);

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <header>
            <Box
                bg={'grey.900'}
                px={4}
                borderBottom={'1px'}
                borderColor={'whiteAlpha.600'}
            >
                <Flex
                    h={16}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <NameTag />
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>
                    <HStack>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                    </HStack>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <Center key={link}>
                                    <NavLink>{link}</NavLink>
                                </Center>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </header>
    );
};
export default Header;
