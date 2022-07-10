import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Stack,
    Center,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NameTag from './nameTag';
import NavLink from './navLink';

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
                        color={'cooler.text'}
                        bg={'cooler.background'}
                        _hover={{ color: 'cooler.secondary' }}
                        _active={{ color: 'cooler.secondary' }}
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
