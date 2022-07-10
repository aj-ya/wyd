import { Text, Icon } from '@chakra-ui/react';
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
        <Text display={['block', 'inline']} color="cooler.text">
            {/* <Icon
                as={FaSpotify}
                color={listening.isPlaying ? 'green.300' : 'red.400'}
            />{' '} */}
            {listening.isPlaying
                ? `${listening.title} by ${listening.artist}`
                : ' nothing on Spotify.'}
        </Text>
    );
};

export default SpotifyStatus;
