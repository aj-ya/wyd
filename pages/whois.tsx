import {
    Avatar,
    Box,
    Center,
    Code,
    Divider,
    Flex,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import NavLink from '../components/navLink';
import { ArrowRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
const WhoIs: NextPage = () => {
    return (
        <Flex
            width="100%"
            height="calc(100vh - 125px)"
            alignItems={'center'}
            justifyContent={'center'}
            fontFamily={'monospace'}
        >
            <Flex
                width={['80%', '60%', '40%']}
                border="1px"
                borderRadius={'10px'}
                borderColor={'cooler.secondaryText'}
                alignItems="center"
                justifyContent={'start'}
                padding={1}
            >
                <VStack
                    width={'100%'}
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
                            as="h1"
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
                            borderWidth="3px"
                            borderColor="cooler.text"
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
                    <Divider />
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
                    <Divider />
                    <VStack display={['none', 'flex', 'flex']}>
                        <Box
                            as="h2"
                            color={'cooler.text'}
                            fontWeight={'bold'}
                            fontSize={['md', 'lg', 'xl']}
                        >
                            Experience
                        </Box>
                        <VStack fontSize={['1em', '1.2em']}>
                            <HStack divider={<Box>|</Box>}>
                                <Box opacity={1}>SDE Intern @ Outpost</Box>
                                <Box color={'cooler.text'} opacity={0.7}>
                                    July 2022 - Current
                                </Box>
                            </HStack>
                            <HStack divider={<Box>|</Box>}>
                                <Box opacity={1}>
                                    Frontend Intern @ Empire Artist
                                </Box>
                                <Box color={'cooler.text'} opacity={0.7}>
                                    March 2021 - May 2021
                                </Box>
                            </HStack>
                        </VStack>
                    </VStack>
                </VStack>
            </Flex>
        </Flex>
    );
};
export default WhoIs;
