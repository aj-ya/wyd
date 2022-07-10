// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const colors = extendTheme({
    colors: {
        text: '#EB1D36',
        background: '#F5EDDC',
        primary: '#A2B5BB',
        secondary: '#CFD2CF',
        modes: {
            dark: {
                text: '#EEEEEE',
                background: '#232931',
                secondary: '#393E46',
                primary: '#4ECCA3',
            },
        },
        cooler: {
            text: '#f9ada0',
            secondaryBg: '#212529',
            background: '#1c1d21',
            secondaryText: '#80a1d4',
            primary: '#eaf4d3',
        },
    },
});
// 3. extend the theme
const theme = extendTheme(config, colors);

export default theme;
