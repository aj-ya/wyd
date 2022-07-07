import { Button, HStack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
function ColorModeButton() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode} size={'md'}>
            {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}
export default ColorModeButton;
