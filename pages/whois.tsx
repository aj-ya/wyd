import {
    Avatar,
    Box,
    Center,
    Code,
    Flex,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import NavLink from '../components/navLink';
import { ArrowRightIcon } from '@chakra-ui/icons';
const WhoIs: NextPage = () => {
    return (
        <Flex
            width="100%"
            height="calc(100vh - 125px)"
            alignItems={'center'}
            justifyContent={'center'}
            fontFamily={'monospace'}
        >
            <VStack
                width={['60%', '40%', '30%']}
                border="1px"
                borderRadius={'10px'}
                borderColor={'cooler.secondaryText'}
                color={'cooler.secondaryText'}
                alignItems="center"
                justifyContent={'start'}
                p={6}
            >
                <HStack
                    width="100%"
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <Box
                        color={'cooler.text'}
                        fontWeight={'extrabold'}
                        fontSize={['xl', '2xl', '3xl']}
                    >
                        Ajeya Bhat
                    </Box>
                    <Avatar
                        name="Ajeya Bhat"
                        src="/pfp-github.jpeg"
                        size={['md']}
                    />
                </HStack>
                <Flex
                    width="100%"
                    direction={'row'}
                    justifyContent={'space-between'}
                    wrap={'wrap'}
                    gap={'2'}
                    fontSize={['1em', '1.2em']}
                    py={'2'}
                >
                    <NavLink
                        linkObj={{
                            name: 'Steam',
                            to: 'https://steamcommunity.com/id/sh4n1/',
                        }}
                        textDecoration={'underline'}
                        textDecorationStyle={'wavy'}
                        isExternal
                        _hover={{ color: 'cooler.primary' }}
                    />
                    <NavLink
                        linkObj={{
                            name: 'GitHub',
                            to: 'https://github.com/aj-ya',
                        }}
                        textDecoration={'underline'}
                        textDecorationOffsetBottom={'2px'}
                        textDecorationStyle={'wavy'}
                        isExternal
                        _hover={{ color: 'cooler.primary' }}
                    />
                    <NavLink
                        linkObj={{
                            name: 'LinkedIn',
                            to: 'https://linkedin.com/in/aj-ya',
                        }}
                        textDecoration={'underline'}
                        textDecorationStyle={'wavy'}
                        _hover={{ color: 'cooler.primary' }}
                        isExternal
                    />
                    <NavLink
                        linkObj={{ name: 'Resume', to: '/resume.pdf' }}
                        textDecoration={'underline'}
                        textDecorationStyle={'wavy'}
                        _hover={{ color: 'cooler.primary' }}
                    />
                </Flex>
                <Text
                    fontSize={['1em', '1.4em']}
                    _selection={{
                        background: 'cooler.text',
                        color: 'cooler.background',
                    }}
                >
                    <ArrowRightIcon />
                    &nbsp;I&apos;m a diligent computer science undergraduate
                    student, currently pursuing B.E. at KLE Technological
                    University with a passion for Free and Open-Source
                    Software(FOSS) and Web and Cloud-Based Technologies.
                </Text>
            </VStack>
        </Flex>
    );
};
export default WhoIs;
