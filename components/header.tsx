import ColorModeButton from './colorModeButton';
import Typewriter from 'typewriter-effect';
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    DarkMode,
    Center,
} from '@chakra-ui/react';

const Links = ['Home', 'Projects', 'Who is', 'Contact'];

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

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <header>
            <Box
                bg={useColorModeValue('gray.100', 'grey.900')}
                px={4}
                borderBottom={'1px'}
                borderColor={useColorModeValue(
                    'blackAlpha.600',
                    'whiteAlpha.600',
                )}
            >
                <Flex
                    h={16}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <HStack
                        spacing={8}
                        paddingStart="0.5"
                        width={'90px'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        bg={useColorModeValue('gray.200', 'gray.900')}
                        border={'1px'}
                        borderColor={useColorModeValue('green.300', 'green')}
                        borderRadius={'5px'}
                    >
                        <Box
                            color={useColorModeValue(
                                'green.700',
                                'telegram.300',
                            )}
                            fontFamily={'monospace'}
                            fontWeight={'500'}
                            fontSize={'1em'}
                            display={'inline-flex'}
                        >
                            <Typewriter
                                options={{
                                    strings: ['ajeya', 'aj-ya', 'sh4n1'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 200,
                                    deleteSpeed: 200,
                                    cursor: '|',
                                    skipAddStyles: true,
                                }}
                            />
                        </Box>
                    </HStack>
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
                        <ColorModeButton />
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
                                    <NavLink key={link}>{link}</NavLink>
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
