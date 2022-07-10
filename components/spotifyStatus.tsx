import { Box, Icon } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CurrentlyListeningType } from './responseTypes';
import { FaSpotify } from 'react-icons/fa';

const SpotifyStatus = () => {
    const [listening, setListening] = useState<CurrentlyListeningType>({
        isPlaying: false,
    });
    useEffect(() => {
        async function FetchCurrentlyPlaying() {
            const listening: CurrentlyListeningType = await fetch(
                '/api/currently-playing',
            ).then((res) => res.json());
            setListening(listening);
        }
        FetchCurrentlyPlaying();
    }, []);
    return (
        <Box fontFamily={'monospace'}>
            <Icon
                as={FaSpotify}
                color={listening.isPlaying ? 'green.300' : 'red.400'}
            />{' '}
            Currenty{' '}
            {listening.isPlaying ? `Playing ${listening.title}` : ' Offline.'}
        </Box>
    );
};

export default SpotifyStatus;
