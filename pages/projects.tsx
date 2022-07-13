import { Box, Flex, Accordion, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Project from '../components/projectCard';
import ProjectData from '../lib/projects.json';
const Projects: NextPage = () => {
    return (
        <Flex
            height="100%"
            width="100%"
            minHeight={'calc(100vh - 125px)'}
            alignItems={'center'}
            justifyContent={'center'}
            color={'cooler.secondaryText'}
            fontFamily={'monospace'}
            fontSize={['1em', '1.1em', '1.2em']}
            direction="column"
        >
            <Text
                fontSize={['xl', '2xl', '3xl']}
                pb={4}
                fontWeight={'extrabold'}
            >
                My Past Projects
            </Text>
            <Flex dir={'row'} gap={6} justifyContent={'center'} wrap={'wrap'}>
                {ProjectData.map((project) => (
                    <Project key={project.title} projectDetails={project} />
                ))}
            </Flex>
        </Flex>
    );
};
export default Projects;
