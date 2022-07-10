import { Box, Flex, HStack, Icon, VStack } from '@chakra-ui/react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <Flex
            as="footer"
            width={'100vw'}
            height={'60px'}
            bottom="0"
            px={3}
            alignItems={'center'}
            justifyContent={'center'}
            color="cooler.secondaryText"
            bg="cooler.background"
        >
            <HStack gap={'3'}>
                <NextLink
                    href="mailto:ajeyabhat.off@gmail.com"
                    target={'_blank'}
                    passHref
                >
                    <Link>
                        <Icon as={FaGithubSquare} h="6" w="6" />
                    </Link>
                </NextLink>
                <NextLink
                    href="https://github.com/aj-ya"
                    target={'_blank'}
                    passHref
                >
                    <Link>
                        <Icon as={MdEmail} h="6" w="6" />
                    </Link>
                </NextLink>
                <NextLink
                    href="https://linkedin.com/in/aj-ya"
                    target={'_blank'}
                    passHref
                >
                    <Link>
                        <Icon as={FaLinkedin} h="6" w="6" />
                    </Link>
                </NextLink>
            </HStack>
            <VStack></VStack>
        </Flex>
    );
};
export default Footer;
