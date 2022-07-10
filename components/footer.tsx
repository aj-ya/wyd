import { Box, Flex, HStack, Icon, VStack } from '@chakra-ui/react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <footer>
            <Flex
                width={'100%'}
                height={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <HStack gap={'3'}>
                    <NextLink href="mailto:ajeyabhat.off@gmail.com" passHref>
                        <Link>
                            <Icon as={FaGithubSquare} h="6" w="6" />
                        </Link>
                    </NextLink>
                    <NextLink href="https://github.com/aj-ya" passHref>
                        <Link>
                            <Icon as={MdEmail} h="6" w="6" />
                        </Link>
                    </NextLink>
                    <NextLink href="https://linkedin.com/in/aj-ya" passHref>
                        <Link>
                            <Icon as={FaLinkedin} h="6" w="6" />
                        </Link>
                    </NextLink>
                </HStack>
                <VStack></VStack>
            </Flex>
        </footer>
    );
};
export default Footer;
