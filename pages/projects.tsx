import { Box, Flex, Accordion } from '@chakra-ui/react';
import { NextPage } from 'next';
import Project from '../components/accordianItem';
import ProjectData from '../lib/projects.json';
const Projects: NextPage = () => {
    return (
        <Flex
            width="100%"
            height="100%"
            alignItems={'center'}
            justifyContent={'center'}
            color={'cooler.secondaryText'}
            fontFamily={'monospace'}
            fontSize={['1em', '1.1em', '1.2em']}
        >
            <Accordion
                defaultIndex={[0]}
                allowMultiple
                width={['70%', '60%', '50%']}
            >
                {ProjectData.map((project) => (
                    <Project key={project.title} projectDetails={project} />
                ))}
            </Accordion>
        </Flex>
    );
};
export default Projects;
