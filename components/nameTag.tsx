import { Box } from '@chakra-ui/react';
import TypewriterComponent from 'typewriter-effect';
import RollingText from './rollingText';
const displayConfig: Array<'block' | 'none'> = ['none', 'block', 'block'];
const NameTag = () => {
    return (
        <Box
            color={'green.100'}
            fontFamily={'monospace'}
            fontSize={'1em'}
            display={'inline-flex'}
            paddingStart="0.5"
            width={['60px', '300px', '300px']}
            alignItems={'start'}
            height="22px"
        >
            <Box fontWeight={'600'} display={'inline-flex'}>
                <Box display={displayConfig}>[</Box>
                <Box width={'50px'}>
                    <RollingText texts={['aj-ya', 'ajeya', 'sh4n1']} />
                </Box>
                <Box display={displayConfig}>@dev~]$</Box>
            </Box>
            <Box display={displayConfig}>
                <TypewriterComponent
                    options={{
                        strings: [
                            `echo "h3ll0, w0rld"`,
                            'whois ajeya',
                            'curl aj-ya.me',
                        ],
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
