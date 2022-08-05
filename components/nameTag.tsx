import { Box, Text } from '@chakra-ui/react';
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
            alignItems={'start'}
        >
            <Box fontWeight={'600'} display={'inline-flex'}>
                <Box display={displayConfig}>[</Box>
                <Box width={'50px'}>
                    <RollingText
                        texts={[
                            <Text key={'aj-ya'}>aj-ya</Text>,
                            <Text key={'ajeya'}>ajeya</Text>,
                            <Text key={'sh4n1'}>sh4n1</Text>,
                        ]}
                    />
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
