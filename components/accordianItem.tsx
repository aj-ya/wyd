import NextLink from 'next/link';
import {
    Link,
    HStack,
    Text,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    IconButton,
    Box,
    Tag,
    VStack,
    Flex,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLinkIcon } from '@chakra-ui/icons';
const Project = ({
    projectDetails,
    key,
}: {
    projectDetails: {
        title: string;
        repo: string;
        deployment: string;
        desc: string;
        tags: string[];
    };
    key: string;
}) => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton _hover={{ color: 'cooler.primary' }}>
                    <Box
                        flex="1"
                        textAlign="left"
                        fontSize={['1.2em', '1.4em', '1.6em']}
                    >
                        {projectDetails.title}
                    </Box>
                    <AccordionIcon _hover={{ color: 'cooler.primary' }} />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Text color={'cooler.text'}>{projectDetails.desc}</Text>
                <VStack align={'start'} pt={3} spacing={1}>
                    <Flex dir="row" gap={2} wrap="wrap">
                        {projectDetails.tags.map((tag) => (
                            <Tag
                                key={tag}
                                color="cooler.secondaryText"
                                bg="transparent"
                                borderColor={'cooler.text'}
                                border="1px"
                                _hover={{ color: 'cooler.primary' }}
                                fontSize={['0.7em', '0.8em', '0.9em']}
                                height="30px"
                            >
                                {tag}
                            </Tag>
                        ))}
                    </Flex>
                    <HStack align={'start'}>
                        <NextLink href={projectDetails.repo} passHref>
                            <Link rounded={'md'} target="_blank" isExternal>
                                <IconButton
                                    aria-label="Go To Repository"
                                    bg={'transparent'}
                                    _hover={{ color: 'cooler.primary' }}
                                    icon={<FaGithub />}
                                    size="md"
                                />
                            </Link>
                        </NextLink>
                        <NextLink href={projectDetails.deployment} passHref>
                            <Link rounded={'md'} target="_blank" isExternal>
                                <IconButton
                                    aria-label="View Deployment"
                                    bg={'transparent'}
                                    _hover={{ color: 'cooler.primary' }}
                                    icon={<ExternalLinkIcon />}
                                    size="md"
                                />
                            </Link>
                        </NextLink>
                    </HStack>
                </VStack>
            </AccordionPanel>
        </AccordionItem>
    );
};
export default Project;
