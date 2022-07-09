import { Box } from '@chakra-ui/react';
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
            <Box
                as={motion.div}
                style={{ position: 'absolute' }}
                key={text}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition="easeInOut 0.3"
                fontSize={'0.8rem'}
            >
                {text}
            </Box>
        </AnimatePresence>
    );
};
const RollingText = ({ texts = ['aj-ya'] }: { texts: string[] }) => {
    const [state, setState] = useState<number>(0);
    useEffect(() => {
        setTimeout(() => {
            setState(state === texts.length - 1 ? 0 : state + 1);
        }, 3000);
    }, [state, texts.length]);

    return <Slideshow text={texts[state]} />;
};
export default RollingText;
