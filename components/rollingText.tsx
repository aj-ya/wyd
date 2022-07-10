import { Box, Center } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

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

const Slideshow = ({ text = 'aj-ya' }: { text: string }) => {
    return (
        <AnimatePresence>
            <motion.div
                key={text}
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

const RollingText = ({ texts = ['aj-ya'] }: { texts: string[] }) => {
    const [state, setState] = useState<number>(0);
    useEffect(() => {
        setTimeout(() => {
            setState(state === texts.length - 1 ? 0 : state + 1);
        }, 4000);
    }, [state, texts.length]);

    return <Slideshow text={texts[state]} />;
};
export default RollingText;
