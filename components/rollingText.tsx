import { Box, Center, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

const variants = {
    enter: {
        y: -10,
        opacity: 0,
    },
    center: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: 10,
        opacity: 0,
    },
};

const Slideshow = ({
    text = <Text>aj-ya</Text>,
    key,
}: {
    text: ReactNode;
    key: string | number;
}) => {
    return (
        <AnimatePresence>
            <motion.div
                key={key}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            >
                <Box position={'absolute'}>
                    <Center>{text}</Center>
                </Box>
            </motion.div>
        </AnimatePresence>
    );
};

const RollingText = ({
    texts = [<Box key={'something'}>aj-ya</Box>],
}: {
    texts: ReactNode[];
}) => {
    const [state, setState] = useState<number>(0);
    useEffect(() => {
        setTimeout(() => {
            setState(state === texts.length - 1 ? 0 : state + 1);
        }, 4000);
    }, [state, texts.length]);

    return <Slideshow text={texts[state]} key={state} />;
};
export default RollingText;
