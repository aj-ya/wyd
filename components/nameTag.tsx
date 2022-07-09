import { Box } from '@chakra-ui/react';
import TypewriterComponent from 'typewriter-effect';
import RollingText from './rollingText';
const displayConfig: Array<'block' | 'none'> = ['none', 'block', 'block'];
const NameTag = () => {
    return (
        <Box
            color={'telegram.300'}
            fontFamily={'monospace'}
            fontWeight={'500'}
            fontSize={'1em'}
            display={'inline-flex'}
            bg={'gray.900'}
            border={'1px'}
            borderColor={'green'}
            borderRadius={'5px'}
            paddingStart="0.5"
            width={['46px', '260px', '260px']}
            alignItems={'start'}
            height="22px"
        >
            <Box display={displayConfig}>[</Box>
            <Box width={'40px'}>
                <RollingText texts={['aj-ya', 'ajeya', 'sh4n1']} />
            </Box>
            <Box display={displayConfig}>@dev~]$</Box>
            <Box display={displayConfig}>
                <TypewriterComponent
                    options={{
                        strings: [`echo "h3ll0, w0rld"`],
                        autoStart: true,
                        loop: true,
                        delay: 200,
                        deleteSpeed: 200,
                        cursor: '',
                        skipAddStyles: true,
                    }}
                />
            </Box>
        </Box>
    );
};
export default NameTag;
